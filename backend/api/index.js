import dotenv from "dotenv";
import express from "express";
import cors from "cors";


import facebookRoutes from "../src/routes/facebookRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Smile AI Marketing OS Backend Running 🚀",
    version: "1.0.0"
  });
});

// Health Route
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "Healthy"
  });
});

// Facebook Routes
app.use("/api/facebook", facebookRoutes);

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found"
  });
});

export default app;
