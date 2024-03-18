import { Router } from 'express';

import * as userController from '../controllers/userController.js';
import * as dataValidation from '../dataValidation/userDataValidation.js';

const router = Router();
/*
*--------------Routes Section-----------------
*/
router.get('/v1/get-users', userController.getUsers);
router.post('/v1/add-user', dataValidation.userDataObj, userController.addUsers);

/*
*-----------------------------
*/
export default router;
