import * as functions from "firebase-functions";
import * as express from "express";
import controller from "./controllers";

const app = express();
const candidate = express();
const job = express();

app.get("/", (req, res) => res.status(200).send("Hello world"));

// candidate
candidate.post("/posts", controller.candidate.createCandidate);

// job
job.post("/posts", controller.job.createJob);

exports.app = functions.https.onRequest(app);
exports.candidate = functions.https.onRequest(candidate);
exports.job = functions.https.onRequest(job);
