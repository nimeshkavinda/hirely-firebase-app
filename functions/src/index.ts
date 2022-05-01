import * as functions from "firebase-functions";
import * as express from "express";
import controller from "./controllers";

const app = express();
const candidate = express();
const job = express();

app.get("/", (req, res) => res.status(200).send("Hello world"));

// candidate
candidate.post("/candidates", controller.candidate.createCandidate);

// job
job.post("/jobs", controller.job.createJob);
job.delete("/jobs/:id", controller.job.deleteJob);

exports.app = functions.https.onRequest(app);
exports.candidate = functions.https.onRequest(candidate);
exports.job = functions.https.onRequest(job);
