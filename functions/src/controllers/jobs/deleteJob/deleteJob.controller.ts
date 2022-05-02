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

const deleteJob = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const job = db.collection("jobs").doc(id);
    await job.delete();
    return res
      .status(200)
      .json({ status: "success", message: "job deleted successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default deleteJob;
