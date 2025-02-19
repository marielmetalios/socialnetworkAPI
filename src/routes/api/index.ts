import { Router } from 'express';
import thoughtRoutes from './thoughtRoutes.js';
import userRoutes from './userRoutes.js';

const router = Router();

// need /api/thoughts FROM routes index.ts
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

export default router;



