import facebookService from "../services/facebookService.js";

// ==============================
// Health Check
// ==============================
export const health = async (req, res) => {
  try {
    const result = await facebookService.health();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      status: "Facebook API Error",
      message: error.message
    });
  }
};

// ==============================
// Get Page Information
// ==============================
export const getPage = async (req, res) => {
  try {
    const result = await facebookService.getPage();

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ==============================
// Get Latest Posts
// ==============================
export const getPosts = async (req, res) => {
  try {
    const limit = Number(req.query.limit || 10);

    const result = await facebookService.getPosts(limit);

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ==============================
// Publish Text Post
// ==============================
export const createPost = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Message is required."
      });
    }

    const result = await facebookService.createPost(message);

    res.status(201).json({
      success: true,
      message: "Facebook post published successfully.",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ==============================
// Publish Image
// ==============================
export const createPhoto = async (req, res) => {
  try {
    const { imageUrl, caption } = req.body;

    if (!imageUrl || imageUrl.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Image URL is required."
      });
    }

    const result = await facebookService.createPhoto(
      imageUrl,
      caption || ""
    );

    res.status(201).json({
      success: true,
      message: "Facebook image published successfully.",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ==============================
// Delete Post
// ==============================
export const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;

    if (!postId) {
      return res.status(400).json({
        success: false,
        message: "Post ID is required."
      });
    }

    const result = await facebookService.deletePost(postId);

    res.status(200).json({
      success: true,
      message: "Facebook post deleted successfully.",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ==============================
// Browser Test Route
// ==============================
export const testPost = async (req, res) => {
  try {
    const result = await facebookService.createPost(
      "🚀 Test Post from Smile AI Marketing OS\n\nFacebook Integration Working Successfully."
    );

    res.status(200).json({
      success: true,
      message: "Test post published successfully.",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
