import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import collegeRoutes from "./routes/collegeRoutes.js";
import examRoutes from "./routes/examRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/colleges", collegeRoutes);
app.use("/api/exams", examRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server Running on Port ${PORT}`));
