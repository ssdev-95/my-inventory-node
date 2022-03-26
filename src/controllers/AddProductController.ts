import { Request, Response } from "express"
import { AddProductService } from "../services/AddProductService"

class AddProductController {
  async handle(req:Request, res:Response) {
		const service = new AddProductService()
		const product = req.body

		try {
  		const newEntry = await service.execute(product)

  		return res.status(200).json({ product: newEntry })
  	} catch (err) {
			return res.status(500).end("Failed to save entry to database!, " + err)
  	}
	}
}

export { AddProductController }
