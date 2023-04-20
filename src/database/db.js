import { Sequelize } from "sequelize";
import { DATABASE, DB_PORT, PASSWORD, USER } from "../config/envConfig.js";


const sequelize = new Sequelize({
    database: DATABASE,
    username: USER,
    password: PASSWORD,
    port: DB_PORT,
    dialect: 'mysql'
})

export default sequelize