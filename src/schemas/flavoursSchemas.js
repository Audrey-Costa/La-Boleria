import Joi from 'joi';

const flavoursSchema = Joi.object({
    name: Joi.string().min(2).required()
})

export default flavoursSchema;