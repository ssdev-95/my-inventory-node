import jwt from "jsonwebtoken"
import { AppDataSource, User } from "../db"
import { IUser } from "../@types"

const SECRET = process.env.JWT_SECRET
class AuthenticateUserService {
  async execute(user: IUser) {
	  const userRepository = AppDataSource.getRepository(User)
		const stored = await userRepository.findOneBy({
			email: user?.email
		})

		if (!stored) {
			const saved = await userRepository.save(user)
			const payload = { ...saved }
			const token = jwt.sign(payload, SECRET, {
				algorithm: 'RS256',
				expiresIn: '1d'
			})
			return token;
		} else {
			const payload = { ...stored }
			const token = jwt.sign(payload, SECRET, {
				algorithm: 'RS256',
			  expiresIn: '1d'  
			})

			return token;
		}
	}
}

export { AuthenticateUserService }