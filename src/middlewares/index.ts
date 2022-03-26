import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET
function isAuthenticated(
	req:Request, res:Response, next:NextFunction
) {
	const token = req.headers.authorization

	if (!token) {
		return res.status(401).end("Unauthorized")
	}

	return next();
}

function isRefreshing(
  req:Request, res:Response, next:NextFunction
) {
	const token = req.headers.authorization

	if (!token) {
		return next();
	}

	const user = jwt.verify(token, SECRET)
	console.log(user)

	return next();
}

export { isAuthenticated, isRefreshing }

