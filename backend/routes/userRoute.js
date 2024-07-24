import express from "express";
import loginController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/admin-panel/login", loginController)

export default userRouter;