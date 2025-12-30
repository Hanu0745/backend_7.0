
import express from 'express';
const router = express.Router();
import {getStudentsDetails,addStudents,getStudentById,getStudentsDetailsWithFilters, updateStudents, updateStudentsStatus} from '../controllers/studentsController.js';

router.get('/get-students', getStudentsDetails);
router.post('/add-students', addStudents);
router.get('/get-student-byid/:userid', getStudentById);//params single
router.get('/get-std-details-withfilter', getStudentsDetailsWithFilters);//query parameters
//Testing API -> "http://localhost:2885/get-std-details-withfilter?stdBranch=MECH&stdCollege=AUS&stdCgpa=7.0"

router.put("/update-students/:id", updateStudents);
router.put("/update-students-status", updateStudentsStatus);

export default router;
