import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "isca2025.",
    database: "invoces",
    synchronize: true,
    logging: true,
    entities: [__dirname__ + "/entities/*.ts"],
    migrations: [],
    subscribers: [],
})
