import jwt from "jsonwebtoken"
import { AppDataSource, User } from "../db"
import { IUser } from "../@types"

const SECRET = process.env.JWT_SECRET
class AuthenticateUserService {
  async execute(user: IUser) {
	  const repository = AppDataSource.getRepository(User)
		const stored = await repository.findOneBy({
			email: user?.email
		})

		if (!stored) {
			const saved = await userRepository.save(user)
			const payload = { ...saved }
			const token = jwt.sign(payload, SECRET, {
				algorithm: 'HS256',
				expiresIn: '1d'
			})
			return token;
		} else {
			const payload = { ...stored }
			const token = jwt.sign(payload, SECRET, {
				algorithm: 'HS256',
			  expiresIn: '1d'  
			})

			return token;
		}
	}
}

export { AuthenticateUserService }
