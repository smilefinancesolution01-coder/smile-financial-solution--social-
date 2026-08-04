import express from "express";
import cors from "cors";

import facebookRoutes from "./routes/facebookRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    app: "Smile AI Marketing OS Backend",
    status: "Running",
  });
});

app.use("/api/facebook", facebookRoutes);

export default app;
