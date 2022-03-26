import { Request, Response } from "express"
import { AuthenticateUserService } from "../services/AuthenticateUserService"

class AuthenticateUserController {
  async handle(req:Request, res:Response) {
		const service = new AuthenticateUserService()
		const user = req.body

		try {
  		const token = await service.execute(user)

  		return res.status(200).json({ token })
  	} catch (err) {
			return res.status(500).end("Failed to authenticate!, " + err)
  	}
	}
}

export { AuthenticateUserController }
