// Import express
import express from "express"
import productRouter from "./routers/products.js";
import authRouter from "./routers/auth.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"
import cookieparser from "cookie-parser"
import userRoute from "./routers/user.js"

dotenv.config();


const app = express();
app.use(cors());
app.use(cookieparser());



//middlewaves
app.use(express.json());
app.use(morgan("dev"))

//connectDb
connectDB(process.env.DB_URI)


//router
app.use("/api", productRouter);
app.use("/api", authRouter)
app.use("/api/user", userRoute)


// Khởi chạy server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
