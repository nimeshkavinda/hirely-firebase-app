import { createCandidate } from "./candidates";
import { createJob, deleteJob } from "./jobs";

const controller = {
  candidate: {
    createCandidate,
  },
  job: {
    createJob,
    deleteJob,
  },
};

export default controller;
