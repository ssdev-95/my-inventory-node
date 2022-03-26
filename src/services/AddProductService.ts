import { AppDataSource, Product } from "../db"
import { IProduct } from "../@types"

class AddProductService {
  async execute(product: IProduct) {
		try {
	  	const productRepository = AppDataSource.getRepository(Product)

		  const saved = await productRepository.save(product)
			return saved;
		} catch (err) {
			throw err;
		}
	}
}

export { AddProductService }
