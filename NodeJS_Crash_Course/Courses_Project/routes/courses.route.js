const express = require('express');
const {body} = require('express-validator');
const router = express.Router();


let coursesController = require('../controllers/cources.controller')

router.route('/')
        .get(coursesController.getAllCourses)
        .post(
        body("title")
            .notEmpty()
            .withMessage("Title is required")
            .isLength({min: 2})
            .withMessage("Title must be atleast 2 chars"), 
        body("price")
            .notEmpty() 
            .withMessage(`Price is required`)
        ,coursesController.addCourse);

router.route('/:courseId')
        .get(coursesController.getSingleCourse)
        .patch(coursesController.editCourse)
        .delete(coursesController.deleteCourse);



module.exports = router;