import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const FACEBOOK_API_VERSION =
  process.env.FACEBOOK_API_VERSION || "v25.0";

export const FACEBOOK_PAGE_ID =
  process.env.FACEBOOK_PAGE_ID;

export const FACEBOOK_PAGE_ACCESS_TOKEN =
  process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

export const GRAPH_API_URL =
  `https://graph.facebook.com/${FACEBOOK_API_VERSION}`;

// Axios instance
export const facebookApi = axios.create({
  baseURL: GRAPH_API_URL,
  timeout: 30000
});

// Check Environment Variables
export function validateFacebookConfig() {
  if (!FACEBOOK_PAGE_ID) {
    throw new Error("FACEBOOK_PAGE_ID is missing in .env");
  }

  if (!FACEBOOK_PAGE_ACCESS_TOKEN) {
    throw new Error("FACEBOOK_PAGE_ACCESS_TOKEN is missing in .env");
  }

  return true;
}
