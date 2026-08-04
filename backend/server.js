import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

if (process.env.VERCEL) {
  console.log("Running on Vercel");
} else {
  app.listen(PORT, () => {
    console.log("==================================");
    console.log("🚀 Smile AI Marketing OS Backend");
    console.log(`Server Running on Port ${PORT}`);
    console.log("==================================");
  });
}

export default app;
