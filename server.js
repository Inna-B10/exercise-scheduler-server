import 'colors'
import express from 'express'
import authRoutes from './app/auth/auth.routes.js'

const app = express()

async function main() {
	app.use(express.json())
	app.use('/api/auth', authRoutes)

	const PORT = 5000
	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
				.bold
		)
	)
}
main()
