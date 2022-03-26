import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes"

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json({
  type: "*/*"
}))

app.use(express.urlencoded({
  extended: true
}))

app.use(cors({
  origin: "*"
}))

app.use(router)

app.listen(
	PORT,
	()=>console.log(`Server running at: ${PORT}`)
)
