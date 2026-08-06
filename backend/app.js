import express from "express";
import cors from "cors";

import facebookRoutes from "./src/routes/facebookRoutes.js";

const app = express();

// ======================================================
// Middlewares
// ======================================================

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: false
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// ======================================================
// Root
// ======================================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Smile AI Marketing OS Backend Running 🚀",
    version: "1.0.0"
  });
});

// ======================================================
// Health
// ======================================================

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "OK",
    service: "Smile AI Marketing OS",
    timestamp: new Date().toISOString()
  });
});

// ======================================================
// Facebook Routes
// ======================================================

app.use("/api/facebook", facebookRoutes);

// ======================================================
// 404
// ======================================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found"
  });
});

// ======================================================
// Error Handler
// ======================================================

app.use((err, req, res, next) => {
  console.error("Server Error:", err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

export default app;
