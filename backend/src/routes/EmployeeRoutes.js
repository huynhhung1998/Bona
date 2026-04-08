import express from 'express';
import {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from '../controllers/EmployeeController.js';

import { upload } from '../middlewares/upload.js';

const router = express.Router();

router.get('/', getEmployees);
router.get('/:id', getEmployeeById);

router.post(
  '/',
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'salaryCommitFile', maxCount: 1 },
    { name: 'salaryGrossFile', maxCount: 1 }
  ]),
  createEmployee
);

router.put(
  '/:id',
  upload.fields([{ name: 'photo', maxCount: 1 }]),
  updateEmployee
);

router.delete('/:id', deleteEmployee);

export default router;