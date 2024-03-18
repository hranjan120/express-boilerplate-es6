import { successResponse } from '../utils/common/makeResponse.js';
import * as userService from '../services/userService.js';
/*
*------------------------------
*/
export const getUsers = async (req, res, next) => {
    try {
        const userData = await userService.getUsers();
        return res.status(200).json(successResponse('User Fetched Successfully', { userData }));
    } catch (error) {
        return next(error);
    }
};

/*------------------*/
export const addUsers = async (req, res, next) => {
    try {
        await userService.insertUser(req.body);
        return res.status(200).json(successResponse('User added Successfully'));
    } catch (error) {
        return next(error);
    }
};
