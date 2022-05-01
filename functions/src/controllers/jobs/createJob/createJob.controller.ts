import { Response } from "express";
import { admin, db } from "../../../firebase.config";

type Job = {
  title: string;
  industry: string;
  jobType: string;
  location: string;
  salary: string;
  description: string;
  isRemote: boolean;
  company: {};
  candidates: {};
};

type Request = { body: Job; params: { id: string } };

const createJob = async (req: Request, res: Response) => {
  const {
    title,
    industry,
    jobType,
    location,
    salary,
    description,
    isRemote,
    company,
    candidates,
  } = req.body;

  try {
    const job = db.collection("jobs").doc();
    const data = {
      id: job.id,
      title,
      industry,
      jobType,
      location,
      salary,
      description,
      isRemote,
      company,
      candidates,
      created: admin.firestore.FieldValue.serverTimestamp(),
    };

    job.set(data);

    res.status(200).send({
      status: "success",
      message: "job created successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export default createJob;
