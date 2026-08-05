import {
  facebookApi,
  FACEBOOK_PAGE_ID,
  FACEBOOK_PAGE_ACCESS_TOKEN,
  validateFacebookConfig
} from "../config/facebook.js";

class FacebookService {
  constructor() {
    validateFacebookConfig();
  }

  // Health Check
  async health() {
    try {
      const response = await facebookApi.get(`/${FACEBOOK_PAGE_ID}`, {
        params: {
          fields: "id,name",
          access_token: FACEBOOK_PAGE_ACCESS_TOKEN
        }
      });

      return {
        success: true,
        status: "Facebook API Connected",
        page: response.data
      };
    } catch (error) {
      throw this.formatError(error);
    }
  }

  // Page Details
  async getPage() {
    try {
      const response = await facebookApi.get(`/${FACEBOOK_PAGE_ID}`, {
        params: {
          fields: "id,name,followers_count,fan_count,picture",
          access_token: FACEBOOK_PAGE_ACCESS_TOKEN
        }
      });

      return response.data;
    } catch (error) {
      throw this.formatError(error);
    }
  }

  // Latest Posts
  async getPosts(limit = 10) {
    try {
      const response = await facebookApi.get(`/${FACEBOOK_PAGE_ID}/posts`, {
        params: {
          limit,
          access_token: FACEBOOK_PAGE_ACCESS_TOKEN
        }
      });

      return response.data;
    } catch (error) {
      throw this.formatError(error);
    }
  }

  // Publish Text Post
  async createPost(message) {
    try {
      if (!message) {
        throw new Error("Message is required.");
      }

      const response = await facebookApi.post(
        `/${FACEBOOK_PAGE_ID}/feed`,
        null,
        {
          params: {
            message,
            access_token: FACEBOOK_PAGE_ACCESS_TOKEN
          }
        }
      );

      return response.data;
    } catch (error) {
      throw this.formatError(error);
    }
  }

  // Publish Image
  async createPhoto(imageUrl, caption = "") {
    try {
      if (!imageUrl) {
        throw new Error("Image URL is required.");
      }

      const response = await facebookApi.post(
        `/${FACEBOOK_PAGE_ID}/photos`,
        null,
        {
          params: {
            url: imageUrl,
            caption,
            access_token: FACEBOOK_PAGE_ACCESS_TOKEN
          }
        }
      );

      return response.data;
    } catch (error) {
      throw this.formatError(error);
    }
  }

  // Delete Post
  async deletePost(postId) {
    try {
      const response = await facebookApi.delete(`/${postId}`, {
        params: {
          access_token: FACEBOOK_PAGE_ACCESS_TOKEN
        }
      });

      return response.data;
    } catch (error) {
      throw this.formatError(error);
    }
  }

  // Error Formatter
  formatError(error) {
    if (error.response?.data) {
      return new Error(JSON.stringify(error.response.data));
    }

    if (error.request) {
      return new Error("No response received from Facebook Graph API.");
    }

    return new Error(error.message || "Unknown Facebook API Error");
  }
}

const facebookService = new FacebookService();

export default facebookService;
