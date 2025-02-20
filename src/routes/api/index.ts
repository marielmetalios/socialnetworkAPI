import { Router } from 'express';
// import thoughtRouter from './thoughtRoutes.js';
import { userRoutes } from './userRoutes.js';

const router = Router();

// need /api/thoughts FROM routes index.ts
// router.use('/thoughts', thoughtRouter);
router.use('/users', userRoutes);

export default router;



