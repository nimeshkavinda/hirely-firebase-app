import * as functions from "firebase-functions";
import * as express from "express";
import controller from "./controllers";

const app = express();
const candidate = express();
const employer = express();
const job = express();

app.get("/", (req, res) => res.status(200).send("Hello world"));

// candidate
candidate.post("/", controller.candidate.createCandidate);

// employer
employer.post("/", controller.employer.createEmployer);

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
