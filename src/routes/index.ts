import { Router } from "express";
import apiRoutes from "./api/index.js";
// import { thoughtRouter } from 
// import { userRouter } from

const router = Router();

//if the route starts with api, use apiRoutes!
router.use('/api', apiRoutes);


export default router;