import express from "express";
import { editCourse, uploadCourse } from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const courseRouter = express.Router()

courseRouter.post('/course', isAuthenticated, authorizeRoles('admin'), uploadCourse)

courseRouter.put('/course/:id', isAuthenticated, authorizeRoles('admin'), editCourse)

export default courseRouter