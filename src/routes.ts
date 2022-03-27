import { Router, Request, Response } from "express"
import { AddProductController } from "./controllers/AddProductController"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { RetrieveProductController } from "./controllers/RetrieveProductController"
import { DeleteProductController } from "./controllers/DeleteProductController"
import { UpdateProductController } from "./controllers/UpdateProductController"
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

router.get(
	"/products",
	isAuthenticated,
	new RetrieveProductController().handle
)

router.delete(
	"/products",
	isAuthenticated,
	new DeleteProductController().handle
)

router.put(
	"/products",
	isAuthenticated,
	new UpdateProductController().handle
)

router.post(
	"/authenticate",
	isRefreshing,
	new AuthenticateUserController().handle
)

export { router }
