import {
  createCandidate,
  updateCandidate,
  getCandidateByUid,
  getCandidates,
  deleteCandidate,
} from "./candidates";
import { createJob, deleteJob, updateJob, getJobs, getJobById } from "./jobs";
import {
  createEmployer,
  getEmployerByUid,
  updateEmployer,
  deleteEmployer,
} from "./employers";

const controller = {
  candidate: {
    createCandidate,
    updateCandidate,
    getCandidateByUid,
    getCandidates,
    deleteCandidate,
  },
  employer: {
    createEmployer,
    getEmployerByUid,
    updateEmployer,
    deleteEmployer,
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
