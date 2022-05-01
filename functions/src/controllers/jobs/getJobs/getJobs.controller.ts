import { Response } from "express";
import { db } from "../../../firebase.config";

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

const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs: Job[] = [];
    const querySnapshot = await db.collection("jobs").get();
    querySnapshot.forEach((doc: any) => jobs.push(doc.data()));
    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default getJobs;
