import Joi from 'joi';

export const commentSchema = Joi.object({
    content: Joi.string().min(3).required()
});