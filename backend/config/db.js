import mongoose from "mongoose";

export const dataBaseConnectivity = () => {
    try {
        mongoose.connect(process.env.DB_URL)
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
}