import Joi from 'joi'

export const registerSchema = Joi.object({
    username: Joi.string().required().trim().messages({
        "any.required": "Username là trường bắt buộc",
        "string.empty": 'Username không được để trống',
        "string.trim": "User không được chứa khoảng trắng"
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Email là trường bắt buộc",
        "string.email": "Email không hợp lệ",
        "string.empty": "Email không được để trống",
    }),
    password: Joi.string().required().messages({
        "any.required": "Password là trường bắt buộc",
        "string.empty": "Password không được để trống"
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
        "any.required": "confirmPassword là trường bắt buộc",
        "any.only": "ConfirmPassword không trùng khớp",
        "string.empty": "ConfirmPassword không được để trống"
    })
})