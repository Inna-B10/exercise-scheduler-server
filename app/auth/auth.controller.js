import { hash, verify } from 'argon2'
import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'
import { UserFields } from '../utils/user.utils.js'
import { generateToken } from './generate-token.js'

//@desc     Auth user
//@route    POST /api/auth/login
//@access   Public

export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body
	const user = await prisma.user.findUnique({
		where: {
			email
		}
	})
	if (user) {
		const isValidPassword = await verify(user.password, password)

		if (isValidPassword) {
			const token = generateToken(user.id)
			console.log({ user, token })
			res.json({ user, token })
		} else {
			res.status(401)
			return res.json({
				message: 'The login information provided is incorrect'
			})
		}
	} else {
		res.status(401)
		return res.json({ message: 'The login information provided is incorrect' })
	}
	res.json(user)
})

//@desc     Register user
//@route    POST /api/auth/register
//@access   Public
export const registerUser = asyncHandler(async (req, res) => {
	const { email, password, nickname } = req.body

	const isHaveUser = await prisma.user.findUnique({
		where: {
			email: email
		}
	})

	if (isHaveUser) {
		res.status(400)
		return res.json({ message: 'User already exists' })
	}

	const user = await prisma.user.create({
		data: {
			email,
			password: await hash(password),
			nickname,
			images: ['images/before.jpg', 'images/after.jpg']
		},
		select: UserFields
	})

	const token = generateToken(user.id)
	res.json({ user, token })
})
