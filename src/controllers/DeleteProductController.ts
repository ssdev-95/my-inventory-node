import { Request, Response } from "express"
import { DeleteProductService } from "../services/DeleteProductService"

class DeleteProductController {
  async handle(req:Request, res:Response) {
		const service = new DeleteProductService()
		const id = req.params?.id

		try {
  		const success = await service.execute(id)
  		return res.status(200).json({ success })
  	} catch (err) {
			return res.status(500).end("Failed to save entry to database!, " + err)
  	}
	}
}

export { DeleteProductController }
