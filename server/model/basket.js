import mongoose from "mongoose";

const BasketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  credit: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Basket", BasketSchema);
