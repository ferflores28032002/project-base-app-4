import { Sequelize } from "sequelize";
import { DATABASE, DB_PORT, PASSWORD, USER, HOST } from "../config/envConfig.js";


const sequelize = new Sequelize({
    database: DATABASE,
    username: USER,
    password: PASSWORD,
    port: DB_PORT,
    dialect: 'mysql',
    host: HOST
})

export default sequelize