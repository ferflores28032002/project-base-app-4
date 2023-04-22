import express from "express";
import cors from 'cors'
import routeUser from './routes/user.route.js'
import sequelize from "./database/db.js";
import { PORT } from "./config/envConfig.js";

const app = express()

app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE, PATCH',
    allowedHeaders: 'Content-Type'
}));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use(routeUser)

const main = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (error) {
        console.log(error)
    }
}

main()

app.listen(PORT, () => console.log(`Server on port ---> ${PORT}`))