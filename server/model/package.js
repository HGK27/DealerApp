import mongoose from "mongoose";

const PackAgeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  credit: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const PackAge = mongoose.model('packages', PackAgeSchema)

export default PackAge