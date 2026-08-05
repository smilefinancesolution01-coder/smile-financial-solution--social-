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
      const { data } = await facebookApi.get(
        `/${FACEBOOK_PAGE_ID}`,
        {
          params: {
            fields: "id,name",
            access_token: FACEBOOK_PAGE_ACCESS_TOKEN
          }
        }
      );

      return {
        success: true,
        status: "Facebook API Connected",
        page: data
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get Page Information
  async getPage() {
    try {
      const { data } = await facebookApi.get(
        `/${FACEBOOK_PAGE_ID}`,
        {
          params: {
            fields:
              "id,name,followers_count,fan_count,picture",
            access_token: FACEBOOK_PAGE_ACCESS_TOKEN
          }
        }
      );

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get Latest Posts
  async getPosts(limit = 10) {
    try {
      const { data } = await facebookApi.get(
        `/${FACEBOOK_PAGE_ID}/posts`,
        {
          params: {
            limit,
            access_token: FACEBOOK_PAGE_ACCESS_TOKEN
          }
        }
      );

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Publish Text Post
  async createPost(message) {
    try {
      const { data } = await facebookApi.post(
        `/${FACEBOOK_PAGE_ID}/feed`,
        null,
        {
          params: {
            message,
            access_token: FACEBOOK_PAGE_ACCESS_TOKEN
          }
        }
      );

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Publish Image
  async createPhoto(imageUrl, caption = "") {
    try {
      const { data } = await facebookApi.post(
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

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Delete Post
  async deletePost(postId) {
    try {
      const { data } = await facebookApi.delete(
        `/${postId}`,
        {
          params: {
            access_token: FACEBOOK_PAGE_ACCESS_TOKEN
          }
        }
      );

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Error Handler
  handleError(error) {
    if (error.response) {
      return new Error(
        JSON.stringify(error.response.data)
      );
    }

    return new Error(error.message);
  }
}

export default new FacebookService();
