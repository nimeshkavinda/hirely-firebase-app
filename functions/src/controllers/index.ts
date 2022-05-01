import { createCandidate } from "./candidates";
import { createJob, deleteJob, updateJob, getJobs } from "./jobs";

const controller = {
  candidate: {
    createCandidate,
  },
  job: {
    createJob,
    deleteJob,
    updateJob,
    getJobs,
  },
};

export default controller;
