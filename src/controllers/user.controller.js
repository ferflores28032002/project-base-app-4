import { userModel } from "../models/user.model.js";

export const findAllUser = async (req, res) => {
    try {
        const { count, rows } = await userModel.findAndCountAll()
        res.json({
            msg: 'Desde el controllers findAllUser',
            count,
            rows
        })
    } catch (error) {

    }
}
