import { hasPassword } from "../helpers/hashPassword.js";
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

// Añadir un nuevo usuario

export const create = async (req, res) => {

    const { name, password } = req.body

    try {
        const newPassword = hasPassword(password)
        const user = await userModel.create({ name, password: newPassword })

        res.status(200).json({
            msg: 'Usuario creado exitosamente',
            user
        })

    } catch (error) {
        console.log(error)
    }

}


// Buscar un usuario por id

export const findOneUser = async (req, res) => {

    const { id } = req.params

    try {
        const user = await userModel.findOne({ where: { id } })

        if (user) {
            return res.status(200).json({

                user
            })
        } else {
            return res.status(404).json({
                msg: 'usuario con el id: ' + id + ' no encontrado!'
            })
        }

    } catch (error) {

        console.log(error)
    }

}

// Eliminar usuarios por id
export const deleteForId = async (req, res) => {

    const { id } = req.params

    try {
        const user = await userModel.destroy({ where: { id } })

        if (user) {
            return res.status(200).json('Deleted!')
        } else {
            return res.status(404).json({
                msg: 'usuario con el id: ' + id + ' no encontrado!'
            })
        }

    } catch (error) {

        console.log(error)
    }

}