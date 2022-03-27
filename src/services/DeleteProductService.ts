import { AppDataSource, Product } from "../db"

class DeleteProductService {
  async execute(id: string) {
		try {
	  	const repository = AppDataSource.getRepository(Product)
		  const deleted = await repository.delete({ id: id })

			return !!deleted.affected;
		} catch (err) {
			throw err;
			return false;
		}
	}
}

export { DeleteProductService }
