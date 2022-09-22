import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()

app.listen(process.env.PORT, () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log('connected to db'))
      .catch((err) => console.log(err))
  })
