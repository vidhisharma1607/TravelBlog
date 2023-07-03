import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import userRouter from "./routing/user-ROutes";
import postRouter from "./routing/post-routes";
import cors from "cors";
// import { getPostById } from "./controllers/post-controllers";
const app = express();
dotenv.config();
//middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

//connections
mongoose
  .connect(
    `mongodb+srv://vidhisharma6658:${process.env.MONGODB_PASSWORD}@cluster0.5ukikqz.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000, () =>
      console.log("Connection is succesfull, Listening to port 5000")
    );
  })
  .catch((err) => {
    console.log(err);
  });
//VFWaQAiNzXSCNK4B
//mongodb+srv://vidhisharma6658:<password>@cluster0.5ukikqz.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://vidhisharma6658:<password>@cluster0.5ukikqz.mongodb.net/?retryWrites=true&w=majority
