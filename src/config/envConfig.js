import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export const PORT = process.env.PORT || 4000
export const HOST = process.env.DB_HOST || 'localhost'
export const USER = process.env.DB_USER || 'root'
export const PASSWORD = process.env.DB_PASSWORD || '12345'
export const DATABASE = process.env.DB_DATABASE || 'prueba4'
export const DB_PORT = process.env.DB_PORT || 3306