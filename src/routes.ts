import { Router, Request, Response } from "express"
import { AddProductController } from "./controllers/AddProductController"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { isAuthenticated, isRefreshing } from "./middlewares"

const router = Router()

router.get(
	"/",
	(req:Request, res:Response)=>res.end("Deu bom")
)


router.post(
	"/products",
	isAuthenticated,
	new AddProductController().handle
)

router.post(
	"/authenticate",
	isRefreshing,
	new AuthenticateUserController().handle
)

export { router }
