var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kinderco"
});

con.connect(err => {
    if (err) console.log(err);
    console.log("Connected");
});

router.get("/", function (req, res, next) {
    res.send("POST PAGE");
});

// NOTICE
router.post("/notice/uploadImage", function (req, res, next) {
    // SAVE DATA
});

router.get("/notice", function (req, res, next) {
    // SEND THE NOTICE DATA

    con.query("SELECT * FROM notice ORDER BY notice_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.post("/notice", function (req, res, next) {
    const title = req.body.title;
    const photo = req.body.photo;
    const notes = req.body.notes;

    con.query("INSERT INTO notice (notice_title, notice_photo, notice_note) VALUES ('" + title + "', '" + photo + "', '" + notes + "')", function (err, result, fields) {
        if (err) throw err;

        res.json({ message: "NOTE SUBMITTED" });
    });
});

// INCIDENT SECTION
router.get("/incident", function (req, res, next) {
    // GET INCIDENT DATA
    con.query("SELECT * FROM incident ORDER BY incident_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.post("/incident", function (req, res, next) {
    const title = req.body.title;
    const photo = req.body.photo;
    const notes = req.body.notes;
    const time = req.body.time;
    const students = req.body.students;


    // SEND TO ONLY SELECTED STUDENTS
    let selected = students.filter(function (student) {
        return student.studentSelected;
    })

    selected.forEach(student => {
        con.query("INSERT INTO incident (incident_student, incident_title, incident_note, incident_photo, incident_time) VALUES ('" + student.studentName + "', '" + title + "', '" + notes + "', '" + photo + "', '" + time + "')", function (err, result, fields) {
            if (err) throw err;

            res.json({ message: "NOTE SUBMITTED" });
        });
    });
});

// MEAL SECTION
router.get("/meal", function (req, res, next) {
    // GET MEAL DATA
    // con.query("", function (err, result, fields) {
    //     if (err) throw err;

    //     res.status(200).json(result);
    // });
});

router.post("/meal", function (req, res, next) {
    const photo = req.body.photo;
    const notes = req.body.notes;
    const students = req.body.students;

    // SEND TO ONLY SELECTED STUDENTS
    let selected = students.filter(function (student) {
        return student.studentSelected;
    })

    selected.forEach(student => {
        // con.query("", function (err, result, fields) {
        //     if (err) throw err;

        //     res.json({ message: "NOTE SUBMITTED" });
        // });
    });
});

// TAG STUDENTS
router.post("/students", function (req, res, next) {
    // GET THE STUDENTS RELATED TO THE TEACHER RELATED TO ROOM

    const loginId = req.body.loginId;

    con.query("SELECT * FROM admin_staff WHERE staff_admin_id='" + loginId + "'", function (err, result, fields) {
        if (err) throw err;

        let roomId = result[0]['staff_room_id'];

        con.query("SELECT * FROM students WHERE student_room_id='" + roomId + "'", function (err, result, fields) {
            console.log(result);
            res.status(200).json(result);
        });
    });
});

module.exports = router;