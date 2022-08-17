import Joi from 'joi';

const clientsSchema = Joi.object({
    name: Joi.string().max(50).required(),
    address: Joi.string().max(255).required(),
    phone: Joi.string().min(10).max(11).required()
})

export default clientsSchema;