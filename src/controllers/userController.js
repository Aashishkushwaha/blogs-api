import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";
import logger from "../utils/logger.js";

export const register = async (req, res, next) => {
  const { email, username, password } = req.body;
  const hashed_password = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ email, username, password: hashed_password });
    logger.info("User registered successfully.", { id: user.id });
    return res.status(201).json({
      message: "User registered",
      user: { id: user.id, email, username },
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || user.is_deleted)
    return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, process.env.BLOGS_API_JWT_SECRET, {
    expiresIn: process.env.BLOGS_API_JWT_EXPIRES_IN,
  });

  logger.info("User logged-in successfully", { token });
  return res.json({ token });
};

export const softDelete = async (req, res) => {
  const userId = req.user.id;
  await User.update({ is_deleted: true }, { where: { id: userId } });
  logger.info("User account deactivated successfully");
  return res.json({ message: "User account deactivated (User soft deleted)" });
};
