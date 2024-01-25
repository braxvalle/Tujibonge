import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const harshedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({ username, email, password: harshedPassword });

  try {
    await newUser.save();
    res.json({ message: "signup success" });
  } catch (error) {
    next(error);
  }
};
