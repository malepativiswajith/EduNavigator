import express from "express";
import College from "../models/College.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const colleges = await College.find();
  res.json(colleges);
});

export default router;
