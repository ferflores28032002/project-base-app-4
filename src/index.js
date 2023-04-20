import express from "express";
import cors from 'cors'
import routeUser from './routes/user.route.js'
import sequelize from "./database/db.js";
import { PORT } from "./config/envConfig.js";

const app = express()
// Routes 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/', routeUser)


async function main() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (error) {
        console.log(error.message)
    }
}

main()


app.listen(PORT, () => console.log(`Server on port ---> ${PORT}`))