export interface AxiosRequestConfig {
  url?: string;
  method?: string;
  headers?: Record<string, string>;
  data?: any;
  params?: Record<string, string>;
  withCredentials?: boolean;
}

export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  config: AxiosRequestConfig;
}

class AxiosInstance {
  baseURL: string;
  interceptors = {
    request: {
      use: (onFulfilled: (config: AxiosRequestConfig) => any) => {
        this.requestInterceptors.push(onFulfilled);
        return this.requestInterceptors.length - 1;
      },
    },
    response: {
      use: (
        onFulfilled: (response: AxiosResponse) => any,
        onRejected: (error: any) => any
      ) => {
        this.responseInterceptors.push({ onFulfilled, onRejected });
        return this.responseInterceptors.length - 1;
      },
    },
  };

  private requestInterceptors: Array<(config: AxiosRequestConfig) => any> = [];
  private responseInterceptors: Array<{
    onFulfilled: (response: AxiosResponse) => any;
    onRejected: (error: any) => any;
  }> = [];

  constructor(config: { baseURL: string; withCredentials?: boolean }) {
    this.baseURL = config.baseURL;
  }

  async request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    let req = { ...config, headers: config.headers || {} };
    for (const interceptor of this.requestInterceptors) {
      req = await interceptor(req);
    }

    const url = req.url?.startsWith("http") ? req.url : `${this.baseURL}${req.url || ""}`;
    try {
      const response = await fetch(url, {
        method: req.method || "GET",
        headers: {
          "Content-Type": "application/json",
          ...req.headers,
        },
        body: req.data ? JSON.stringify(req.data) : undefined,
      });

      let data = null;
      const text = await response.text();
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = text;
      }

      let res: AxiosResponse = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        config: req,
      };

      if (!response.ok) {
        throw { response: res, message: `HTTP Error ${response.status}`, config: req };
      }

      for (const interceptor of this.responseInterceptors) {
        if (interceptor.onFulfilled) {
          res = await interceptor.onFulfilled(res);
        }
      }
      return res;
    } catch (err: any) {
      let error = err;
      for (const interceptor of this.responseInterceptors) {
        if (interceptor.onRejected) {
          try {
            return await interceptor.onRejected(error);
          } catch (nextErr) {
            error = nextErr;
          }
        }
      }
      throw error;
    }
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request({ ...config, method: "GET", url });
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request({ ...config, method: "POST", url, data });
  }
}

export const axios = {
  create: (config: { baseURL: string; withCredentials?: boolean }) => {
    return new AxiosInstance(config);
  },
};

export default axios;
