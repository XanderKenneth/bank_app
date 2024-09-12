import Joi from 'joi';


export const signupSchema = Joi.object({

        firstname: Joi.string().required().min(5),
        lastname: Joi.string().optional().min(5),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[/w_]).{8,}$')).required().messages({
            'string.pattern.base': 'password must contain atleast a number, a uppercase letter , a lowercase letter, a special character and 8 characters long.',
            // 'any.required': "password is required"
        })

})

export const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})