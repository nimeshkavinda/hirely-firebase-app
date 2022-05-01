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

const createCandidate = async (req: Request, res: Response) => {
  const {
    uid,
    firstName,
    lastName,
    email,
    mobile,
    profilePhoto,
    role,
    about,
    resume,
  } = req.body;

  try {
    const candidate = db.collection("candidate").doc(uid);
    const data = {
      uid,
      firstName,
      lastName,
      email,
      mobile,
      profilePhoto,
      role,
      about,
      resume,
      created: admin.firestore.FieldValue.serverTimestamp(),
    };

    candidate.set(data);

    res.status(200).send({
      status: "success",
      message: "candidate created successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default createCandidate;
