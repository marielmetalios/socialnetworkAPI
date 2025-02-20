import { Router } from 'express';
// import { User } from '../../models';
// import Thought from './models/reaction'
import { getAllUsers } from '../../controllers/userController.js';
import { getUserById } from '../../controllers/userController.js';
import { createUser } from '../../controllers/userController.js';
// import { removeFriend } from '../../controllers/userController';
import { updateUser } from '../../controllers/userController.js';
import { deleteUser } from '../../controllers/userController.js';

const router = Router();

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// the below example is CHAINED
router
  .route('/users/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

export { router as userRoutes };
