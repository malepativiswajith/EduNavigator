import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  name: String,
  city: String,
  ranking: Number,
  fees: Number,
  examsAccepted: [String],
  image: String,
  overview: String,
  facilities: [String],
  placementData: [
    {
      branch: String,
      avgPackage: Number
    }
  ]
});

export default mongoose.model("College", collegeSchema);
