import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
