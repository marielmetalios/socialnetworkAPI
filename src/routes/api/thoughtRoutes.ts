import { getAllThoughts, getThoughtById, createThought } from "../../controllers/thoughtController.js";
import { Router } from 'express';

const router = Router();

// /api/users
router.route('/').get(getAllThoughts).post(createThought);

// the below example is CHAINED
router
  .route('/thoughts/:thoughtId')
  .get(getThoughtById)

export { router as thoughtRoutes };
