import { Router } from "express";
import { create, deleteForId, findAllUser, findOneUser } from "../controllers/user.controller.js";

const route = Router()

// Routes
route.get('/users', findAllUser)
route.get('/user/:id', findOneUser)
route.post('/user/create', create)
route.delete('/user/:id', deleteForId)


export default route

