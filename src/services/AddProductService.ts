import { AppDataSource, Product } from "../db"
import { IProduct } from "../@types"

class AddProductService {
  async execute(product: IProduct) {
		try {
	  	const repository = AppDataSource.getRepository(Product)

		  const saved = await repository.save(product)
			return saved;
		} catch (err) {
			throw err;
		}
	}
}

export { AddProductService }
