import { create } from "../lib/zustand";
import { documentsApi } from "../api/documents";

export interface UploadJob {
  id: string;
  fileName: string;
  progress: number;
  status: "idle" | "uploading" | "success" | "failed";
  error?: string;
  retryCount: number;
}

export interface UploadsState {
  jobs: Record<string, UploadJob>;
  addJob: (id: string, fileName: string) => void;
  updateProgress: (id: string, progress: number) => void;
  setSuccess: (id: string) => void;
  setFailed: (id: string, error: string) => void;
  triggerUpload: (
    id: string,
    file: File,
    metadata: { title: string; plantId?: string; equipmentId?: string; tags?: string[] }
  ) => Promise<void>;
}

export const useUploadsStore = create<UploadsState>((set, get) => ({
  jobs: {},

  addJob: (id, fileName) => {
    set((state) => ({
      jobs: {
        ...state.jobs,
        [id]: {
          id,
          fileName,
          progress: 0,
          status: "idle",
          retryCount: 0,
        },
      },
    }));
  },

  updateProgress: (id, progress) => {
    set((state) => {
      const job = state.jobs[id];
      if (!job) return {};
      return {
        jobs: {
          ...state.jobs,
          [id]: { ...job, progress, status: "uploading" },
        },
      };
    });
  },

  setSuccess: (id) => {
    set((state) => {
      const job = state.jobs[id];
      if (!job) return {};
      return {
        jobs: {
          ...state.jobs,
          [id]: { ...job, progress: 100, status: "success" },
        },
      };
    });
  },

  setFailed: (id, error) => {
    set((state) => {
      const job = state.jobs[id];
      if (!job) return {};
      return {
        jobs: {
          ...state.jobs,
          [id]: { ...job, status: "failed", error },
        },
      };
    });
  },

  triggerUpload: async (id, file, metadata) => {
    const { updateProgress, setSuccess, setFailed } = get();

    set((state) => {
      const job = state.jobs[id];
      if (!job) return {};
      return {
        jobs: {
          ...state.jobs,
          [id]: { ...job, status: "uploading", progress: 0 },
        },
      };
    });

    try {
      // Simulate progress ticks
      const interval = setInterval(() => {
        const currentJob = get().jobs[id];
        if (currentJob && currentJob.progress < 90) {
          updateProgress(id, currentJob.progress + 15);
        }
      }, 300);

      await documentsApi.upload(file, metadata);
      clearInterval(interval);
      setSuccess(id);
    } catch (err: any) {
      setFailed(id, err.message || "Upload Failed");
    }
  },
}));
