import { Router } from "express";
import { isConectionBBDD } from '../controllers/index.controller.js'

const router = Router();

router.get('/ping' , isConectionBBDD);

export default router;