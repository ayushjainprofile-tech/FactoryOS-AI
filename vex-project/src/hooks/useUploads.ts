import { useUploadsStore } from "../store/uploads";

export const useUploads = () => {
  const { jobs, addJob, triggerUpload } = useUploadsStore();

  const uploadFile = async (
    file: File,
    metadata: { title: string; plantId?: string; equipmentId?: string; tags?: string[] }
  ) => {
    const id = `job_${Date.now()}`;
    addJob(id, file.name);
    await triggerUpload(id, file, metadata);
  };

  return {
    jobs: Object.values(jobs),
    uploadFile,
  };
};

export default useUploads;
