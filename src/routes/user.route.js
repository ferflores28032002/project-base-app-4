import { Router } from "express";
import { create, findAllUser } from "../controllers/user.controller.js";

const route = Router()

// Routes
route.get('/users', findAllUser)
route.post('/users', create)


export default route

