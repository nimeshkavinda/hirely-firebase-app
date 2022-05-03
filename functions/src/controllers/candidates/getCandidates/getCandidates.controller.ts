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

const getCandidates = async (req: Request, res: Response) => {
  try {
    const candidates: Candidate[] = [];
    const querySnapshot = await db
      .collection("candidates")
      // .orderBy("created", "asc")
      .get();
    querySnapshot.forEach((doc: any) => candidates.push(doc.data()));
    return res.status(200).json(candidates);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default getCandidates;
