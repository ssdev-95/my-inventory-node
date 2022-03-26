import { Router, Request, Response } from "express"
import { AddProductController } from "./controllers/AddProductController"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"

const router = Router()

router.get(
	"/",
	(req:Request, res:Response)=>res.end("Deu bom")
)


router.post(
	"/products/new",
	new AddProductController().handle
)

router.post(
	"/authenticate",
	new AuthenticateUserController().handle
)

export { router }
