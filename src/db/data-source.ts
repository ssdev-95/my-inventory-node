import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Product } from "./entity/Product"

export const AppDataSource = new DataSource({
  type: "postgres",
  database: process.env.DATABASE,
	username: process.env.DATABASE,
	password: process.env.DB_PASSWORD,
	url: process.env.DB_URL,
	synchronize: true,
  logging: false,
  entities: [User, Product],
  migrations: ["src/migration/*.*"],
})
