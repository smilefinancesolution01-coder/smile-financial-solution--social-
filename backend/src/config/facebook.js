import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const PAGE_ID = process.env.FACEBOOK_PAGE_ID;
const PAGE_ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
const API_VERSION = process.env.FACEBOOK_API_VERSION || "v25.0";

const graph = axios.create({
  baseURL: `https://graph.facebook.com/${API_VERSION}`,
  timeout: 30000,
});

export async function graphRequest(method, endpoint, data = {}) {
  try {
    const response = await graph({
      method,
      url: endpoint,
      params: {
        access_token: PAGE_ACCESS_TOKEN,
        ...data,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        JSON.stringify(error.response.data)
      );
    }

    throw error;
  }
}

export { PAGE_ID };
