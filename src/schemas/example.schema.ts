import joi from 'joi'

export const createBookSchema = joi.object({
	bookId: joi.number().required(),
	title: joi.string().lowercase().trim().required(),
	price: joi.number().max(10000).required(),
})

export const updateBookSchema = joi.object({
	title: joi.string().lowercase().trim(),
	price: joi.number().max(10000),
})