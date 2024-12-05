import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (_id, email) => {
  const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

export const signup = async (req, res) => {
  const isSignedUp = await User.findOne({ email: req.body.email });
  if (isSignedUp)
    return res.status(409).json({ message: "User already exists!" });
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    ...req.body,
    password: hashedPassword,
  });

  if (!user) return res.status(400).json({ message: "User creation failed!" });
  await user.save();
  const { password, ...rest } = user._doc;
  const token = createToken(rest._id, rest.email);
  res.status(201).json({
    message: "User created successfully!",
    user: rest,
    accessToken: token,
  });
};

export const signin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ message: "User not found!" });
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: "Invalid credentials!" });
  const { password, ...rest } = user._doc;
  const token = createToken(rest._id, rest.email);
  res.json({
    message: "User signed in successfully!",
    user: rest,
    accessToken: token,
  });
};

export const getAllUsers = async (req, res) => {
  const users = await User.find().select({
    _id: 1,
    name: 1,
    email: 1,
    isAdmin: 1,
    createdAt: 1,
  });
  if (!users) return res.status(404).json({ message: "No users found!" });
  res.status(200).json({ users });
};

export const updateUser = async (req, res) => {
  const { id, isAdmin } = req.body;
  await User.findByIdAndUpdate({ _id: id }, { isAdmin }).select({
    password: 0,
  });
  const user = await User.findOne({ _id: id });
  if (!user) return res.status(404).json({ message: "User not found!" });
  res.json({
    message: "User updated successfully!",
    user,
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.body;
  await User.findByIdAndDelete({ _id: id });
  res.json({ message: "User deleted successfully!" });
};
