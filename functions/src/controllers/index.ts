import { createCandidate } from "./candidates";
import { createJob, deleteJob, updateJob, getJobs, getJobById } from "./jobs";
import { createEmployer } from "./employers";

const controller = {
  candidate: {
    createCandidate,
  },
  employer: {
    createEmployer,
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
