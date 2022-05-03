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
  candidates: [];
};

type Request = { body: Job; params: { id: string } };

const updateJob = async (req: Request, res: Response) => {
  const {
    body: {
      title,
      industry,
      jobType,
      location,
      salary,
      description,
      isRemote,
      company,
      candidates,
    },
    params: { id },
  } = req;

  try {
    const job = db.collection("jobs").doc(id);

    const currentData = (await job.get()).data() || {};

    const data = {
      id: currentData.id,
      title: title || currentData.title,
      industry: industry || currentData.industry,
      jobType: jobType || currentData.jobType,
      location: location || currentData.location,
      salary: salary || currentData.salary,
      description: description || currentData.description,
      isRemote: isRemote || currentData.isRemote,
      company: company || currentData.company,
      candidates: candidates || currentData.candidates,
      // created: currentData.created,
      updated: admin.firestore.FieldValue.serverTimestamp(),
    };

    await job.set(data);
    return res.status(200).json({
      status: "success",
      message: "job updated successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default updateJob;
