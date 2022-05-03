import { Response } from "express";
import { admin, db } from "../../../firebase.config";

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

const updateCandidate = async (req: Request, res: Response) => {
  const {
    body: {
      firstName,
      lastName,
      email,
      mobile,
      profilePhoto,
      role,
      about,
      resume,
    },
    params: { uid },
  } = req;

  try {
    const candidate = db.collection("candidates").doc(uid);

    const currentData = (await candidate.get()).data() || {};

    const data = {
      uid: currentData.uid,
      firstName: firstName || currentData.firstName,
      lastName: lastName || currentData.lastName,
      email: email || currentData.email,
      mobile: mobile || currentData.mobile,
      profilePhoto: profilePhoto || currentData.profilePhoto,
      role: role || currentData.role,
      about: about || currentData.about,
      resume: resume || currentData.resume,
      updated: admin.firestore.FieldValue.serverTimestamp(),
    };

    await candidate.set(data);
    return res.status(200).json({
      status: "success",
      message: "candidate updated successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default updateCandidate;
