import { Router } from "express";
import { create, findAllUser, findOneUser } from "../controllers/user.controller.js";

const route = Router()

// Routes
// route.get('/users', findAllUser)
// route.get('/users/:id', findOneUser)
route.post('/user/create', create)


export default route

