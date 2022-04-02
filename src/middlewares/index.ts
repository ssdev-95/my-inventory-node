import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET

function isAuthenticated(
	req:Request, res:Response, next:NextFunction
) {
	const token = req
	  .headers
		.authorization?.replace("Bearer ", "")

	if(!token) {
		return res.status(401).end("Unauthorized")
	}

	if(!(Object.keys(req.body)).includes("category")) {
	  const user = jwt.verify(token, SECRET)
	  req.body = user
		return next()
	}

	const user = jwt.verify(token, SECRET)
	req.body = {
		...req.body,
		owner_id: user.id
	}
  return next();
}

function isRefreshing(
  req:Request, res:Response, next:NextFunction
) {
	const token = req
	  .headers
		.authorization?.replace("Bearer ", "")

	if (!token) {
		return next();
	}

	const user = jwt.verify(token, SECRET)
	req.body = user

	return next();
}

export { isAuthenticated, isRefreshing }

