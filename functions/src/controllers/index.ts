import { createCandidate } from "./candidates";
import { createJob, deleteJob, updateJob, getJobs, getJobById } from "./jobs";
import { createEmployer, getEmployerByUid } from "./employers";

const controller = {
  candidate: {
    createCandidate,
  },
  employer: {
    createEmployer,
    getEmployerByUid,
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
