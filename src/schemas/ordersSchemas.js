import Joi from 'joi';

const ordersSchema = Joi.object({
    clientId: Joi.number().integer().required(),
    cakeId: Joi.number().integer().required(),
    quantity: Joi.number().integer().min(1).max(5).required()
})

export default ordersSchema;