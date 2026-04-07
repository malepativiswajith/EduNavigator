import express from "express";
import College from "../models/College.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const colleges = await College.find();
  res.json(colleges);
});

router.get("/:id", async (req, res) => {
  const college = await College.findById(req.params.id);
  res.json(college);
});

export default router;
