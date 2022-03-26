import { Request, Response } from "express"
import { RetrieveProductService } from "../services/RetrieveProductService"

class RetrieveProductController {
  async handle(req:Request, res:Response) {
		const service = new RetrieveProductService()
		const { qtd } = req.params
		const userId = req.body.id

		try {
  		const products = await service.execute(
				userId,
				Number(qtd)
			)

  		return res.status(200).json({ products })
  	} catch (err) {
			return res.status(500).end("Failed to retrieve data!, " + err)
  	}
	}
}

export { RetrieveProductController }
