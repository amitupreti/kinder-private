var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kinderco"
});

con.connect(err => {
    if (err) throw err;
    console.log("ATTENDANCE DATABASE CONNECTED");
});

const getToday = () => {
    // GET TODAYS DATE FOR ATTENDENCE
    let date = new Date();
    let addZeros = num => ("00" + String(num)).slice(-2);
    let today = date.getFullYear() + '-' + addZeros(Number(date.getMonth()) + 1) + '-' + addZeros(date.getDate());

    return today;
}

router.get("/:studentId", function (req, res, next) {

    const studentId = req.params.studentId; // STUDENT TO CHECK ATTENDANCE

    // GET STUDENT PARENT EMAIL
    con.query("SELECT student_parent_email FROM students WHERE student_id='" + studentId + "'", function (err, result, fields) {
        if (err) throw err;

        const studentParentEmail = result[0]['student_parent_email'];

        con.query("SELECT * FROM attendance WHERE attendance_student='" + studentParentEmail + "' AND attendance_date='" + getToday() + "'", function (err, result, fields) {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
});

router.post("/", function (req, res, next) {

    const students = req.body.students;
    const studentsCheckedIn = req.body.studentsCheckedIn;
    const checkTime = req.body.time;
    const checkType = req.body.type;

    if (checkType === "checkIn") {
        // SAVE THE DATA IF NOT CHECKED IN
        let studentsNotCheckedIn = students.filter(eachStudent => studentsCheckedIn.indexOf(eachStudent.studentId) === -1);

        // SELECT THE SELECTED STUDENTS WITH NOT CHECKED
        let selectedStudents = studentsNotCheckedIn.filter(eachStudent => eachStudent['studentSelected']);

        selectedStudents.forEach(eachStudent => {
            // GET STUDENT PARENT EMAIL
            con.query("SELECT student_parent_email FROM students WHERE student_id='" + eachStudent['studentId'] + "'", function (err, result, fields) {
                if (err) throw err;

                const studentParentEmail = result[0]['student_parent_email'];

                // INSERT INTO ATTENDANCE
                con.query("INSERT INTO attendance VALUES (NULL, '" + studentParentEmail + "', '" + getToday() + "', '" + checkTime + "', 0, '" + 1 + "', '" + 0 + "')", function (err, result, field) {
                    if (err) throw err;

                    console.log("INSERTED");
                });
            });
        });
    } else if (checkType === "checkOut") {
        // UPDATE THE DATABASE FOR CHECKED STUDENTS TO attendance_checkout : 1
        let checkedStudents = students.filter(eachStudent => studentsCheckedIn.indexOf(eachStudent.studentId) !== -1);

        let selectedStudents = checkedStudents.filter(eachStudent => eachStudent['studentSelected']);

        selectedStudents.forEach(eachStudent => {
            // GET STUDENT PARENT EMAIL
            con.query("SELECT student_parent_email FROM students WHERE student_id='" + eachStudent['studentId'] + "'", function (err, result, fields) {
                if (err) throw err;

                const studentParentEmail = result[0]['student_parent_email'];

                // UPDATE THE CHECK OUT TIME OF CHECKEDIN STUDENT
                con.query("UPDATE attendance SET attendance_checkout_time='" + checkTime + "', attendance_checkedout = '" + 1 + "' WHERE attendance_student='" + studentParentEmail + "'", function (err, result, field) {
                    if (err) throw err;

                    console.log("CHECKED OUT");
                });
            });
        });
    } else {
        console.log("INVALID TYPE");
    }

    res.status(200).json({ message: "OK" });
});

module.exports = router;