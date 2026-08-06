import serverless from "serverless-http";
import app from "../backend/app.js";

// Create the serverless handler once
const handler = serverless(app);

// Export for Vercel
export default async function (req, res) {
  return handler(req, res);
}
