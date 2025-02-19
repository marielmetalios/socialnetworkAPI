import { Router } from 'express';
import { User } from '../models';
import Thought from './models/reaction'
const router = Router();

// /api/courses
router.route('/').get(User).post();

// the below example is CHAINED
router
  .route()
  .get()
  .put()
  .delete();

export { router as courseRouter };
