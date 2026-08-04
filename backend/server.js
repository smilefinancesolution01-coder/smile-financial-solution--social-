import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("==================================");
  console.log("🚀 Smile AI Marketing OS Backend");
  console.log(`✅ Server Running on Port ${PORT}`);
  console.log(`🌐 http://localhost:${PORT}`);
  console.log("==================================");
});
