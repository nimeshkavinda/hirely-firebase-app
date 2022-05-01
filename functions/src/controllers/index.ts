import { createCandidate } from "./candidates";
import { createJob, deleteJob, updateJob, getJobs, getJobById } from "./jobs";

const controller = {
  candidate: {
    createCandidate,
  },
  job: {
    createJob,
    deleteJob,
    updateJob,
    getJobs,
    getJobById,
  },
};

export default controller;
