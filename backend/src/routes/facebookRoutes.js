import express from "express";

import {
  getPageInfo,
  createPost,
  createPhotoPost,
  healthCheck,
} from "../controllers/facebookController.js";

const router = express.Router();

// Health Check
router.get("/health", healthCheck);

// Page Information
router.get("/page", getPageInfo);

// Create Text Post
router.post("/post", createPost);

// Create Photo Post
router.post("/photo", createPhotoPost);

export default router;
