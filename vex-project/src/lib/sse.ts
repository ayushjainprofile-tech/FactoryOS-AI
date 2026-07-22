import { getAccessToken } from "../api/client";

export interface SseOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  onMessage: (data: string) => void;
  onError: (error: any) => void;
  onClose: () => void;
}

export function parseSseStream(
  url: string,
  options: SseOptions,
  signal?: AbortSignal
): { cancel: () => void } {
  const controller = new AbortController();
  const activeSignal = signal || controller.signal;

  const token = getAccessToken();
  const requestHeaders = {
    "Content-Type": "application/json",
    ...options.headers,
  } as Record<string, string>;

  if (token) {
    requestHeaders["Authorization"] = `Bearer ${token}`;
  }

  fetch(url, {
    method: options.method || "POST",
    headers: requestHeaders,
    body: options.body ? JSON.stringify(options.body) : undefined,
    signal: activeSignal,
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`SSE HTTP Error ${response.status}`);
      }
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) {
        throw new Error("SSE Stream Body is not readable");
      }

      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const cleanLine = line.trim();
          if (!cleanLine) continue;

          if (cleanLine.startsWith("data: ")) {
            options.onMessage(cleanLine.slice(6));
          }
        }
      }
      options.onClose();
    })
    .catch((err) => {
      if (err.name !== "AbortError") {
        options.onError(err);
      }
    });

  return {
    cancel: () => controller.abort(),
  };
}
