import { AppDataSource, Product } from "../db"

class DeleteProductService {
  async execute(id: string) {
		try {
	  	const repository = AppDataSource.getRepository(Product)
		  const { affected } = await repository.delete({ id: id })

			return !!affected;
		} catch (err) {
			throw err;
			return false;
		}
	}
}

export { DeleteProductService }
