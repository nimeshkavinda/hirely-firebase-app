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

const getCandidateByUid = async (req: Request, res: Response) => {
  const { uid } = req.params;

  try {
    const candidate: Candidate[] = [];
    await db
      .collection("candidates")
      .doc(uid)
      .get()
      .then((doc: any) => candidate.push(doc.data()));
    return res.status(200).json(candidate);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default getCandidateByUid;
