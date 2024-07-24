import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";

const dataUpload = async () => {
  const password = "Azhar1965";
  const hashedPassword = await bcrypt.hash(password, 15);
  const user = new User({
    email: "74abuazhar@gmail.com",
    password: hashedPassword,
  });

  // Check if the user already exists
  const existingUser = await User.findOne({ email: "74abuazhar@gmail.com" });
  if (!existingUser) {
    await user.save();
  }
};
dataUpload();

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Please Enter Correct Email or Password",
      });
    }
    //   Existing Email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Please Enter Correct Email or Password",
      });
    }
    //   Password Match
    const isMatchPass = await bcrypt.compare(password, user.password);
    if (!isMatchPass) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Please Enter Correct Email or Password",
      });
    }
    //   Login Success
    res.status(StatusCodes.OK).json({
      message: "Login Successfully",
      user,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
export default loginController;
