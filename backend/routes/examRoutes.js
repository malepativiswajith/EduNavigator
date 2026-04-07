import express from "express";
import Exam from "../models/Exam.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const exams = await Exam.find();
  res.json(exams);
});

router.get("/:id", async (req, res) => {
  const exam = await Exam.findById(req.params.id);
  res.json(exam);
});

export default router;
