import { Response } from "express";
import { db } from "../../../firebase.config";

type Employer = {
  uid: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  companyLogo: string;
  jobs: [];
  candidates: [];
};

type Request = { body: Employer; params: { uid: string } };

const getEmployerByUid = async (req: Request, res: Response) => {
  const { uid } = req.params;

  try {
    const employer: Employer[] = [];
    await db
      .collection("employers")
      .doc(uid)
      .get()
      .then((doc: any) => employer.push(doc.data()));
    return res.status(200).json(employer);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default getEmployerByUid;
