import Joi from 'joi';

const cakesSchema = Joi.object({
    name: Joi.string().min(2).required(),
    price: Joi.number().positive().required(),
    description: Joi.string(),
    flavourId: Joi.number().integer().required(),
    image: Joi.string().uri().required()
})

export default cakesSchema;

