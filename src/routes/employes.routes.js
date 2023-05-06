import {Router} from 'express';
import { getEmployees, getOneEmployes , createEmployes , delateEmployes , updateEmployes } from '../controllers/employees.controller.js';

const router = Router();

router.get('/employess', getEmployees);

router.get('/employess/:id', getOneEmployes);

router.post('/employess', createEmployes)

router.put('/employess/:id', updateEmployes)

router.delete('/employess/:id', delateEmployes)

export default router;