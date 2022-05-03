import * as functions from "firebase-functions";
import * as express from "express";
import controller from "./controllers";
const cors = require("cors");

const app = express();
const candidate = express();
const employer = express();
const job = express();

app.use(cors({ origin: true }));
candidate.use(cors({ origin: true }));
employer.use(cors({ origin: true }));
job.use(cors({ origin: true }));

app.get("/", (req, res) => res.status(200).send("Hello world"));

// candidate
candidate.post("/", controller.candidate.createCandidate);
candidate.patch("/:uid", controller.candidate.updateCandidate);
candidate.get("/:uid", controller.candidate.getCandidateByUid);
candidate.get("/", controller.candidate.getCandidates);

// employer
employer.post("/", controller.employer.createEmployer);
employer.get("/:uid", controller.employer.getEmployerByUid);
employer.patch("/:uid", controller.employer.updateEmployer);

// job
job.post("/", controller.job.createJob);
job.delete("/:id", controller.job.deleteJob);
job.patch("/:id", controller.job.updateJob);
job.get("/", controller.job.getJobs);
job.get("/:id", controller.job.getJobById);

exports.app = functions.https.onRequest(app);
exports.candidate = functions.https.onRequest(candidate);
exports.employer = functions.https.onRequest(employer);
exports.job = functions.https.onRequest(job);
