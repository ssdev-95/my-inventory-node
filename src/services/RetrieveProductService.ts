import { AppDataSource, Product } from "../db"

class RetrieveProductService {
  async execute(userId:string, quantity:number) {
		try {
	  	const repository = AppDataSource.getRepository(Product)

		  const products = await repository.find({
				where: { owner_id: userId },
			})
			return products;
		} catch (err) {
			throw err;
		}
	}
}

export { RetrieveProductService }
