import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User.js"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "mydb",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [ User ],
    migrations: [],
    subscribers: [],
})