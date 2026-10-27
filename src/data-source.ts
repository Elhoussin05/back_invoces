import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "isca2025.",
<<<<<<< HEAD
    database: "invoices",
    synchronize: true,
    logging: false,
    entities: [__dirname__ + "/entities/*.ts"],
=======
    database: "invoces",
    synchronize: true,
    logging: false,
    entities: [__dirname__+'/entities/*.ts'],
>>>>>>> c9356e7d9034ec781fe694c3848f8a30534b2b9c
    migrations: [],
    subscribers: [],
})
