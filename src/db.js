import { createPool }  from 'mysql2/promise';
import { DB_HOST,DB_DATABASE,DB_PASSWORD,DB_PORT,DB_USER } from './config.js'

//Es equivalente a createConexion
export const con = createPool ( {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
} )
