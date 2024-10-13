import express from "express";
import { register, login, requestRefreshToken, userLogout } from "../controllers/auth.js";
import { verifyToken } from "../controllers/middleware.js"
const router = express.Router();

router.post(`/register`, register)
router.post(`/login`, login)
router.post(`/refresh`, requestRefreshToken)
router.post(`/logout`, verifyToken, userLogout)

export default router;