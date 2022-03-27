import { Request, Response } from "express"
import { UpdateProductService } from "../services/UpdateProductService"

class UpdateProductController {
  async handle(req:Request, res:Response) {
		const service = new UpdateProductService()
		const product = req.body

		try {
  		const updated = await service.execute(product)

  		return res.status(200).json({ product: {} })
  	} catch (err) {
			return res.status(500).end("Failed to save entry to database!, " + err)
  	}
	}
}

export { UpdateProductController }
