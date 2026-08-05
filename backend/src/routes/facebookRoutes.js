import express from "express";

import {
  health,
  getPage,
  getPosts,
  createPost,
  createPhoto,
  deletePost
} from "../controllers/facebookController.js";

import facebookService from "../services/facebookService.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/
router.get("/health", health);

/*
|--------------------------------------------------------------------------
| Page Information
|--------------------------------------------------------------------------
*/
router.get("/page", getPage);

/*
|--------------------------------------------------------------------------
| Latest Posts
|--------------------------------------------------------------------------
*/
router.get("/posts", getPosts);

/*
|--------------------------------------------------------------------------
| Publish Text Post
|--------------------------------------------------------------------------
*/
router.post("/post", createPost);

/*
|--------------------------------------------------------------------------
| Publish Photo
|--------------------------------------------------------------------------
*/
router.post("/photo", createPhoto);

/*
|--------------------------------------------------------------------------
| Delete Post
|--------------------------------------------------------------------------
*/
router.delete("/post/:postId", deletePost);

/*
|--------------------------------------------------------------------------
| Temporary Test Route
| (Browser se live Facebook post test karne ke liye)
|--------------------------------------------------------------------------
*/
router.get("/test-post", async (req, res) => {
  try {
    const result = await facebookService.createPost(
      "🚀 Hello Facebook!\n\nThis is my first automated test post from Smile AI Marketing OS."
    );

    res.status(200).json({
      success: true,
      message: "Post published successfully.",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;
