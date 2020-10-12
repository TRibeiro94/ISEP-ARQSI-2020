const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = (reqBodyData) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
     //Validate data before making a user
    return schema.validate(reqBodyData);
};
//Login Validation
const loginValidation = (reqBodyData) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
     //Validate data before making a user
    return schema.validate(reqBodyData);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;