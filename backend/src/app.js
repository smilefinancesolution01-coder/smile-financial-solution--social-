import express from "express";
import cors from "cors";

import facebookRoutes from "./src/routes/facebookRoutes.js";

const app = express();

// ==============================
// Middlewares
// ==============================
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ==============================
// Root Route
// ==============================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Smile AI Marketing OS Backend Running 🚀",
    version: "1.0.0"
  });
});

// ==============================
// Facebook Routes
// ==============================
app.use("/api/facebook", facebookRoutes);

// ==============================
// 404 Handler
// ==============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found"
  });
});

// ==============================
// Global Error Handler
// ==============================
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

export default app;
