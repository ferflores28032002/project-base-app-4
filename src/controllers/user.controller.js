import { hasPassword } from "../helpers/hashPassword.js";
import { userModel } from "../models/user.model.js";

export const findAllUser = async (req, res) => {
    try {
        const { count, rows } = await userModel.findAndCountAll()
        res.json({
            count,
            rows
        })
    } catch (error) {
        console.log(error)
    }
}


export const create = async (req, res) => {

    const { name, password } = req.body

    try {

        // TODO: Verificar si existe ya el usuario

        const newPassword = hasPassword(password)
        const user = await userModel.create({ name, password: newPassword })

        res.status(200).json({
            msg: 'User created successfully!',
            user
        })

    } catch (error) {
        console.log(error)
    }

}


export const findOneUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await userModel.findOne({ where: { id } })

        if (user) res.status(200).json({ user })
        else
            res.status(404).json({ msg: `User with id "${id} not found!"` })
    } catch (error) {
        console.log(error)
    }

}

export const deleteForId = async (req, res) => {
    const { id } = req.params

    try {
        const user = await userModel.destroy({ where: { id } })

        if (user) res.status(200).json('Deleted!')
        else res.status(404).json({ msg: `User with id "${id} not found!"` })

    } catch (error) {
        console.log(error)
    }
}

export const updateForId = async (req, res) => {

    const { id } = req.params
    const { name } = req.body

    try {
        const user = await userModel.findOne({ where: { id } })

        user.set({ name })
        await user.save()

        if (user) return res.status(200).json('Update!')
        else
            res.status(404).json({
                msg: `User with id "${id} not found!"`
            })
    } catch (error) {

        console.log(error)
    }

}