import user from "../models/user.js";
import { registerSchema } from "../schemas/auth.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    //lấy dữ liệu từ user
    const { username,email, password } = req.body;
    // kiểm tra xem dữ liệu có hợp lệ không
    const {error} = registerSchema.validate(req.body, { abortEarly: false })
    if (error) {
        console.log(error.details.map((messages) => messages.messages));
       
    }
    // kiểm tra xem user đã tồn tại chưa
    const exitsUser = await user.findOne({ email });
    if (exitsUser) {
        return res.status(400).json({
            messages:["Email đã tồn tại"],
        })
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
    user.password = undefined;
    return res.status(201).json({
        user:user
    })
};