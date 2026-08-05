import express from "express";
import cors from "cors";

import facebookRoutes from "./routes/facebookRoutes.js";

const app = express();

// Middlewares
app.use(cors());

app.use(
  express.json({
    limit: "10mb"
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb"
  })
);

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    app: "Smile AI Marketing OS",
    message: "Backend Running Successfully 🚀",
    version: "1.0.0"
  });
});

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "Healthy",
    timestamp: new Date().toISOString()
  });
});

// Facebook API Routes
app.use("/api/facebook", facebookRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

export default app;
