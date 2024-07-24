import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const userModel = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: [true, "Name is required"],
  //   minLength: [2, "Name should be more than 2 characters"],
  //   maxLength: [12, "Name should be less than 12 characters"],
  // },
  email: {
    type: String,
    required: [true, "Email is required"],
    minLength: [3, "Email should be more than 3 characters"],
    maxLength: [25, "Email should be less than 15 characters"],
    unique: true,
    validate: {
      validator: isEmail,
      message: "Invalid email address",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Password should be more than 6 characters"],
  },
});

const User = mongoose.model("User", userModel);

export default User;
