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
  candidates: [];
};

type Request = { body: Job; params: { id: string } };

const getJobById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const job: Job[] = [];
    await db
      .collection("jobs")
      .doc(id)
      .get()
      .then((doc: any) => job.push(doc.data()));
    return res.status(200).json(job);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default getJobById;
