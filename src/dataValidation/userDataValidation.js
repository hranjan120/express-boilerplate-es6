import Joi from 'joi';
import { badResponse } from '../utils/common/makeResponse.js';

/*-----------------*/
export const getuserDataObj = (req, res, next) => {
    const schema = Joi.object({
        page: Joi.number().required().label('Page Number'),
        limit: Joi.number().required().label('Limit'),
    });
    const result = schema.validate(req.query);
    return (result.error) ? res.status(400).json(badResponse(result.error.details[0].message.replace(/"/g, ''))) : next();
};

export const userDataObj = (req, res, next) => {
    const schema = Joi.object({
        userName: Joi.string().max(300).required().label('Name'),
        userEmail: Joi.string().email().required().label('Email'),
        userAddress: Joi.string().max(500).allow('').required()
            .label('Address'),
    });
    const result = schema.validate(req.body);
    return (result.error) ? res.status(400).json(badResponse(result.error.details[0].message.replace(/"/g, ''))) : next();
};
