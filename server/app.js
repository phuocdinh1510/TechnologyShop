// Import express
import express from "express"
import productRouter from "./routers/products.js";
import authRouter from "./routers/auth.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import morgan from "morgan"

dotenv.config();


const app = express();


//middlewaves
app.use(express.json());
app.use(morgan("dev"))

//connectDb
connectDB(process.env.DB_URI)


//router
app.use("/api", productRouter);
app.use("/api",authRouter)

// Khởi chạy server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
