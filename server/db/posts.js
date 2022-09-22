import mongoose from "mongoose";

const postShcema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      creator: {
        type: String,
        required: true,
      }
})