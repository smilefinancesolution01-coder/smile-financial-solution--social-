import facebookService from "../services/facebookService.js";

// Get Page Information
export const getPageInfo = async (req, res) => {
  try {
    const result = await facebookService.getPageInfo();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create Text Post
export const createPost = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const result = await facebookService.createPost(message);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create Image Post
export const createPhotoPost = async (req, res) => {
  try {
    const { message, imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({
        success: false,
        message: "Image URL is required",
      });
    }

    const result = await facebookService.createPhotoPost(
      message,
      imageUrl
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Facebook Health Check
export const healthCheck = async (req, res) => {
  try {
    const result = await facebookService.healthCheck();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
