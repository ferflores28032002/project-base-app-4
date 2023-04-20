import { Router } from "express";
import { findAllUser } from "../controllers/user.controller.js";

const route = Router()

// Routes
route.get('/users', findAllUser)


export default route

