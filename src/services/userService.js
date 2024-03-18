import UserDataModel from '../models/UserDataModel.js';

/*
*------------------------------------------
*/
export const insertUser = async (dt) => {
    const data = new UserDataModel(dt);
    const insertedData = await data.save();
    return insertedData;
};

export const getUsers = async () => {
    const userData = await UserDataModel.find();
    return userData;
};
