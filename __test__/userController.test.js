import '../loadEnv.js';
import mongoose from 'mongoose';
import supertest from 'supertest';

import UserDataModel from '../src/models/UserDataModel.js';

import app from '../app.js';

beforeAll(() => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGO_URL);
});
// beforeEach(() => {
//     console.log('Before Each Test case');
// });
// afterEach(() => {
//     console.log('After Each Test case');
// });
afterAll(async () => {
    await mongoose.disconnect();
});
/*-------------------*/
test('USER SCHEMA TEST Create new Object of User Schema and Result must have Mongo ID', async () => {
    const orgCategoryData = await UserDataModel.create({
        userName: 'User name',
        userEmail: 'admin2@gmail.com',
        userAddress: '',
    });
    expect(mongoose.Types.ObjectId.isValid(orgCategoryData._id)).toBeTruthy();
});

/*-------------------*/
test('ADD NEW USER /user/v1/add-user', async () => {
    const orgTempDt = {
        userName: 'User name',
        userEmail: 'admin2@gmail.com',
        userAddress: '',
    };

    /* ---------Add new Temp User----------*/
    await supertest(app).post('/user/v1/add-user')
        .send(orgTempDt).expect(200)
        .then(async (response) => {
            expect(response.body.statusText).toBe('OK');
        });
});

/*-------------------*/
test('GET ALL USERS /user/v1/get-users', async () => {
    /* ---------Add new Temp User----------*/
    await supertest(app).get('/user/v1/get-users')
        .send().expect(200)
        .then(async (response) => {
            expect(response.body.statusText).toBe('OK');
        });
});
