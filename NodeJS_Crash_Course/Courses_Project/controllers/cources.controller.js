let {courses} = require('../data/courses');
const {validationResult} = require('express-validator');


const getAllCourses = (req,res) => {
    res.json(courses);
    };

const getSingleCourse = (req,res) =>
    {
        const courseId = req.params.courseId;
        const course = courses.find((coures) => coures.id == courseId);
        if(!course) 
        {
            return res.status(404).json({msg: "Course not found"});
        }
        res.json(course);
    };

const addCourse = (req,res) =>
    {
        const course = {id: courses.length+1, ...req.body}
        courses.push(course);
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json(errors.array());
        }
        res.json(course);
    };

const editCourse = (req,res) =>
    {
        const courseId = +req.params.courseId;
        let course = courses.find((course) => course.id === courseId);
        console.log(course);
        if(!course) 
        {
            return res.status(404).json({msg: "Course not found"});
        }
        course = {...course, ...req.body};
        res.json(course);
    };

const deleteCourse = (req,res) =>{
    const courseId = +req.params.courseId;
    courses = courses.filter((course) => course.id != courseId )
    res.json(courses);
};

module.exports = {
    getAllCourses,
    getSingleCourse,
    addCourse,
    editCourse,
    deleteCourse,
}