import { isMongoId, isNotNumber } from '../src/utils/common/commonValidation.js';

/*-------------------*/
test('VALIDATE isMongoId, To check a given string is valid 24 character mongo ID', async () => {
    const mid = '62d92c4be742616d0046dc9e';
    const mid1 = '62d92c4be742616d0046dc9ee';
    expect(isMongoId(mid)).toBeTruthy();
    expect(isMongoId(mid1)).toBeFalsy();
});

/*-------------------*/
test('VALIDATE isNotNumber, To check a given value is valid Number or not', async () => {
    const num = 34;
    const num1 = '34sdh';
    expect(isNotNumber(num)).toBeFalsy();
    expect(isNotNumber(num1)).toBeTruthy();
});
