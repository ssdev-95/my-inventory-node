import { AppDataSource, Product } from "../db"
import { IProduct } from "../@types"

class UpdateProductService {
  async execute(product: IProduct) {
		try {
	  	const repository = AppDataSource.getRepository(Product)
		  const { affected } = await repository.update(product.id,product)

			return !!affected;
		} catch (err) {
			throw err
			return null;
		}
	}
}

export { UpdateProductService }
