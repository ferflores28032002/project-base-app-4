import { Router } from "express";
import { findAllUser } from "../controllers/user.controller.js";

const route = Router()

// Routes
route.get('/users', findAllUser)
route.get('/jose', (req, res) => res.send('jose'))


export default route

