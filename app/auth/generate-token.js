import jwt from 'jsonwebtoken'

export const generateToken = userId =>
	jwt.sign(
		{
			userId
		},
		process.env.ACCESS_TOKEN,
		{
			expiresIn: '7d'
		}
	)
