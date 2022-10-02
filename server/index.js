import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers/package.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

dotenv.config()

// const router = express.Router();


app.listen(process.env.PORT, () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log('connected to db'))
      .catch((err) => console.log(err))
  })


