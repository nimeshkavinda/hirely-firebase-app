import { Response } from "express";
import { admin, db } from "../../../firebase.config";

type Employer = {
  uid: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  companyLogo: string;
  jobs: {};
  candidates: {};
};

type Request = { body: Employer; params: { uid: string } };

const updateEmployer = async (req: Request, res: Response) => {
  const {
    body: {
      firstName,
      lastName,
      companyName,
      email,
      companyLogo,
      jobs,
      candidates,
    },
    params: { uid },
  } = req;

  try {
    const employer = db.collection("employers").doc(uid);

    const currentData = (await employer.get()).data() || {};

    const data = {
      uid: currentData.uid,
      firstName: firstName || currentData.firstName,
      lastName: lastName || currentData.lastName,
      companyName: companyName || currentData.companyName,
      email: email || currentData.email,
      companyLogo: companyLogo || currentData.companyLogo,
      jobs: jobs || currentData.jobs,
      candidates: candidates || currentData.candidates,
      updated: admin.firestore.FieldValue.serverTimestamp(),
    };

    await employer.set(data);
    return res.status(200).json({
      status: "success",
      message: "employer updated successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default updateEmployer;
