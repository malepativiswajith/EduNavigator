import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  name: String,
  level: String,
  conductingBody: String,
  eligibility: [String],
  pattern: [
    {
      subject: String,
      questions: Number
    }
  ],
  syllabusPDF: String
});

export default mongoose.model("Exam", examSchema);
