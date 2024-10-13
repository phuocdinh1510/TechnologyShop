
import { users, deleteUser } from "../controllers/user.js"
import { verifyToken, verifyTokenAdminAuth } from "../controllers/middleware.js"
import express from "express"
const router = express.Router();

router.get("/", verifyToken, users)

router.delete("/:id",  verifyTokenAdminAuth,deleteUser)

export default router;