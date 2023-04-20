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
        res.status(500).json({
            msg: 'Error en el controlador create user',
            error
        })
    }

}


// Buscar un usuario por id

export const findOneUser = async (req, res) => {

    const { id } = req.params

    try {
        const user = await userModel.findOne({ where: id })

        if (user) {
            res.status(200).json({
                user
            })
        }else {
            res.status(404).json({
                msg: 'usuario con el id: ' + id + ' no encontrado!'
            })  
        }

    } catch (error) {
        res.status(500).json({
            msg: 'Error en el controlador findOneUser user',
            error
        })
    }

}