import express from "express";
import mongoose, { Error } from "mongoose";
import router from "./router";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api", router());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});

// Connect to DB
const MONGO_URL: string =
    process.env.DATABASE_URL ||
    "mongodb+srv://99tech:99tech@cluster0.ixfwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
