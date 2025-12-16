
import express from 'express';
const router = express.Router();
import {getStudentsDetails,addStudents} from '../controllers/studentsController.js';

router.get('/get-students', getStudentsDetails);
router.post('/add-students', addStudents);

export default router;
