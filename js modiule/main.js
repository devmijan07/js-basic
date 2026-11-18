import {
    getStudentName,
    getStudnetAge,
    getStudentCourseName
} from "./student.js";


import {
    instituteInfo,
    locationInfo,
    studentCourseName
} from "./info.js"

console.log("Main JS Loaded");
console.log(studentCourseName)

const studentName = document.getElementById("name");
const studentAge = document.getElementById("age");
const courseName = document.getElementById("course");

const institute = document.getElementById("institute");
const location = document.getElementById("location");
const course = document.getElementById("instituteCourse");

studentName.innerHTML = getStudentName();
studentAge.innerHTML = getStudnetAge();
courseName.innerHTML = getStudentCourseName();


institute.innerHTML = instituteInfo;
location.innerHTML = locationInfo;
course.innerHTML = studentCourseName;
