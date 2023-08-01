import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo } from "./entity/Photo.js"
import { PhotoMetadata } from "./entity/PhotoMetadata.js"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "mydb",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [Photo, PhotoMetadata],
    migrations: [],
    subscribers: [],
})