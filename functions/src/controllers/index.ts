import { createCandidate } from "./candidates";
import { createJob, deleteJob, updateJob } from "./jobs";

const controller = {
  candidate: {
    createCandidate,
  },
  job: {
    createJob,
    deleteJob,
    updateJob,
  },
};

export default controller;
