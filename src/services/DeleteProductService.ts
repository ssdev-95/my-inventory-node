import { AppDataSource, Product } from "../db"

class DeleteProductService {
  async execute(id: string) {
		try {
	  	const repository = AppDataSource.getRepository(Product)
		  await repository.delete({ id })
			return true;
		} catch (err) {
			throw err;
			return false;
		}
	}
}

export { DeleteProductService }
