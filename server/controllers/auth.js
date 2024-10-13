import user from "../models/user.js";
import { registerSchema } from "../schemas/auth.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

let refreshTokens = [];

export const register = async (req, res) => {
  //lấy dữ liệu từ user
  const { username, email, password } = req.body;
  // kiểm tra xem dữ liệu có hợp lệ không
  const { error } = registerSchema.validate(req.body, { abortEarly: false });
  if (error) {
    console.log(error.details.map((messages) => messages.messages));
  }
  // mã hóa mật khẩu bằng bcryptjs
  const hashPassword = await bcryptjs.hash(password, 10);

  //lưu user vào database

  user.create({
    username,
    email,
    password: hashPassword,
  });
  //trả về thông tin user đã đăng ký
  return res.status(201).json({
    user: user,
  });
};
const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, admin: user.admin },
    process.env.JWT_ACCESS_KEY,
    { expiresIn: "20s" }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id, admin: user.admin },
    process.env.JWT_REFRESH_KEY,
    { expiresIn: "30d" }
  );
};

export const login = async (req, res) => {
  try {
    const User = await user.findOne({ username: req.body.username });
    if (!User) {
      return res.status(400).json("Wrong username");
    }

    const validPassword = await bcryptjs.compare(
      req.body.password,
      User.password
    );
    if (!validPassword) {
      return res.status(400).json("Wrong password");
    }

    // Call the functions to generate tokens
    const newAccessToken = generateAccessToken(User);
    const newRefreshToken = generateRefreshToken(User);

    // Optionally store the refresh token
    refreshTokens.push(newRefreshToken);

    // Set the refresh token as an HTTP-only cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false, // Set to true in production
      path: "/",
      sameSite: "strict",
    });

    // Send both User and the new access token in the response
    return res.status(200).json({ User, accessToken: newAccessToken });
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
};
export const requestRefreshToken = async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json("You're not authenticated");

  if (!refreshTokens.includes(token)) {
    return res.status(403).json("Refresh token is not valid");
  }

  jwt.verify(token, process.env.JWT_REFRESH_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json("Token is not valid");
    }

    // Remove the old refresh token and add the new one
    refreshTokens = refreshTokens.filter((t) => t !== token);

    // Generate new tokens
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    // Store the new refresh token
    refreshTokens.push(newRefreshToken);

    // Send the new refresh token and access token
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false, // Set to true in production
      path: "/",
      sameSite: "strict",
    });
    res.status(200).json({ accessToken: newAccessToken });
  });
};
export const userLogout = async (req, res) => {
  res.clearCookie("refreshToken");
  refreshTokens = refreshTokens.filter(
    token => token !== req.cookies.refreshToken
  );
  res.status(200).json("Logout !");
};
