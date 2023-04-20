import { Router } from "express";
import { create, findAllUser, findOneUser } from "../controllers/user.controller.js";

const route = Router()

// Routes
route.get('/users', findAllUser)
route.post('/user/create', create)
route.get('/user/:id', findOneUser)


export default route

