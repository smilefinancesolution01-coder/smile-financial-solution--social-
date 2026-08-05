import axios from "axios";

// ================================
// Base URL
// ================================
const API = axios.create({
  baseURL: "https://smile-financial-solution-social.vercel.app/api/facebook",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 15000
});

// ================================
// Health Check
// ================================
export const health = async () => {
  const { data } = await API.get("/health");
  return data;
};

// ================================
// Get Page Information
// ================================
export const getPage = async () => {
  const { data } = await API.get("/page");
  return data;
};

// ================================
// Get Latest Posts
// ================================
export const getPosts = async (limit = 10) => {
  const { data } = await API.get(`/posts?limit=${limit}`);
  return data;
};

// ================================
// Create Text Post
// ================================
export const createPost = async (message) => {
  const { data } = await API.post("/post", {
    message
  });

  return data;
};

// ================================
// Create Photo Post
// ================================
export const createPhoto = async (imageUrl, caption = "") => {
  const { data } = await API.post("/photo", {
    imageUrl,
    caption
  });

  return data;
};

// ================================
// Delete Post
// ================================
export const deletePost = async (postId) => {
  const { data } = await API.delete(`/post/${postId}`);
  return data;
};

// ================================
// Browser Test Post
// ================================
export const testPost = async () => {
  const { data } = await API.get("/test-post");
  return data;
};

export default API;
