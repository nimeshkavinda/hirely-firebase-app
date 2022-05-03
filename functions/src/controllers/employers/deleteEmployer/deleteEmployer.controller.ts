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

const deleteEmployer = async (req: Request, res: Response) => {
  const { uid } = req.params;

  try {
    const employer = db.collection("employers").doc(uid);
    await employer.delete();
    return res
      .status(200)
      .json({ status: "success", message: "employer deleted successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default deleteEmployer;
