import { graphRequest, PAGE_ID } from "../config/facebook.js";

class FacebookService {
  // Get Page Information
  async getPageInfo() {
    try {
      const data = await graphRequest(
        "GET",
        `/${PAGE_ID}`,
        {
          fields: "id,name,followers_count,fan_count"
        }
      );

      return {
        success: true,
        data
      };
    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }

  // Create Text Post
  async createPost(message) {
    try {
      const data = await graphRequest(
        "POST",
        `/${PAGE_ID}/feed`,
        {
          message
        }
      );

      return {
        success: true,
        postId: data.id,
        data
      };
    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }

  // Create Image Post
  async createPhotoPost(message, imageUrl) {
    try {
      const data = await graphRequest(
        "POST",
        `/${PAGE_ID}/photos`,
        {
          caption: message,
          url: imageUrl
        }
      );

      return {
        success: true,
        photoId: data.id,
        data
      };
    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }

  // Health Check
  async healthCheck() {
    try {
      const data = await graphRequest(
        "GET",
        `/${PAGE_ID}`,
        {
          fields: "id,name"
        }
      );

      return {
        success: true,
        status: "Facebook API Connected",
        page: data
      };
    } catch (error) {
      return {
        success: false,
        status: "Facebook API Error",
        message: error.message
      };
    }
  }
}

export default new FacebookService();
