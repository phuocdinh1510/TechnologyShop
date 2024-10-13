import User from "../models/user.js"


export const users = async (req, res) => {
    try {
        const data = await User.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error})
    }
};
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json("delete successfully")
    } catch (error) {
        res.status(500).json({error})
    }
};