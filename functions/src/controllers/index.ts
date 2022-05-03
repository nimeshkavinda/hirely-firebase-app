import {
  createCandidate,
  updateCandidate,
  getCandidateByUid,
  getCandidates,
} from "./candidates";
import { createJob, deleteJob, updateJob, getJobs, getJobById } from "./jobs";
import { createEmployer, getEmployerByUid, updateEmployer } from "./employers";

const controller = {
  candidate: {
    createCandidate,
    updateCandidate,
    getCandidateByUid,
    getCandidates,
  },
  employer: {
    createEmployer,
    getEmployerByUid,
    updateEmployer,
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
