import { Response } from "express";
import { admin, db } from "../../../firebase.config";

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

const createEmployer = async (req: Request, res: Response) => {
  const {
    uid,
    firstName,
    lastName,
    companyName,
    email,
    companyLogo,
    jobs,
    candidates,
  } = req.body;

  try {
    const employer = db.collection("employers").doc(uid);
    const data = {
      uid,
      firstName,
      lastName,
      companyName,
      email,
      companyLogo,
      jobs,
      candidates,
      created: admin.firestore.FieldValue.serverTimestamp(),
    };

    employer.set(data);

    res.status(200).send({
      status: "success",
      message: "employer created successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default createEmployer;
