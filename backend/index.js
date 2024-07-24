import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { dataBaseConnectivity } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
const app = express();

// MIDDLEWARE 
app.use(express.json());
app.use(cors())
// Env File 
dotenv.config({ path: "config/config.env" });

// PORT 
const PORT = process.env.PORT || 3124;

// Database Connectivity 
dataBaseConnectivity();

app.use("/api/v1/user", userRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
