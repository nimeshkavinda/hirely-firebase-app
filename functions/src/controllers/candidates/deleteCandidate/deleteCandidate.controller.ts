import { Response } from "express";
import { db } from "../../../firebase.config";

type Candidate = {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  profilePhoto: string;
  role: string;
  about: string;
  resume: string;
};

type Request = { body: Candidate; params: { uid: string } };

const deleteCandidate = async (req: Request, res: Response) => {
  const { uid } = req.params;

  try {
    const candidate = db.collection("candidates").doc(uid);
    await candidate.delete();
    return res
      .status(200)
      .json({ status: "success", message: "candidate deleted successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default deleteCandidate;
