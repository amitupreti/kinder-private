var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');

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
router.get("/notice", function (req, res, next) {
    // SEND THE NOTICE DATA
    con.query("SELECT * FROM notice ORDER BY notice_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.post("/notice", function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) throw err;

        // FOR FILES

        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var shuffled = str.split('').sort(function () { return 0.5 - Math.random() }).join('');
        var finalShuffled = shuffled.substring(0, 6);

        var oldpath = files.image.path;
        var newpath = path.join(__dirname, "uploaded_images", "image_" + finalShuffled + "_" + files.image.name);

        var textData = JSON.parse(fields.textdata);
        var imageName = "image_" + finalShuffled + "_" + files.image.name;

        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;

            con.query("INSERT INTO notice (notice_title, notice_photo, notice_note, notice_uploaded_by) VALUES ('" + textData['title'] + "', '" + imageName + "', '" + textData['notes'] + "', '" + textData['loginId'] + "')", function (err, result, fields) {
                if (err) throw err;

                res.json({ message: "Notice Uploaded" });
            });

        });
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
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) throw err;

        // FOR FILES
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var shuffled = str.split('').sort(function () { return 0.5 - Math.random() }).join('');
        var finalShuffled = shuffled.substring(0, 6);

        var oldpath = files.image.path;
        var newpath = path.join(__dirname, "uploaded_images", "image_" + finalShuffled + "_" + files.image.name);

        var textData = JSON.parse(fields.textdata);
        var imageName = "image_" + finalShuffled + "_" + files.image.name;

        // UPLOAD IMAGE
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;

            // SEND TO ONLY SELECTED STUDENTS
            let selected = textData['students'].filter(function (student) {
                return student.studentSelected;
            })

            selected.forEach(eachStudent => {
                // UPDATE DATABASE
                con.query("INSERT INTO incident (incident_student, incident_title, incident_note, incident_photo, incident_time, incident_uploaded_by) VALUES ('" + eachStudent['studentId'] + "', '" + textData['title'] + "', '" + textData['notes'] + "', '" + imageName + "','" + textData['time'] + "', '" + textData['loginId'] + "')", function (err, result, fields) {
                    if (err) throw err;
                });
            });

        });

        res.json({ message: "Incident Uploaded" });
    });
});

// MEAL SECTION
router.get("/meal", function (req, res, next) {
    // GET MEAL DATA
    con.query("SELECT * FROM meal ORDER BY meal_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.post("/meal", function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) throw err;

        // FOR FILES
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var shuffled = str.split('').sort(function () { return 0.5 - Math.random() }).join('');
        var finalShuffled = shuffled.substring(0, 6);

        var oldpath = files.image.path;
        var newpath = path.join(__dirname, "uploaded_images", "image_" + finalShuffled + "_" + files.image.name);

        var textData = JSON.parse(fields.textdata);
        var imageName = "image_" + finalShuffled + "_" + files.image.name;

        // UPLOAD IMAGE
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;

            // SEND TO ONLY SELECTED STUDENTS
            let selected = textData['students'].filter(function (student) {
                return student.studentSelected;
            })

            selected.forEach(eachStudent => {
                // UPDATE DATABASE
                con.query("INSERT INTO meal (meal_student, meal_type, meal_well, meal_photo, meal_note, meal_uploaded_by) VALUES ('" + eachStudent['studentId'] + "', '" + textData['activeOption'][0]['name'] + "', '" + textData['howMuchOption'][0]['name'] + "', '" + imageName + "','" + textData['notes'] + "', '" + textData['loginId'] + "')", function (err, result, fields) {
                    if (err) throw err;
                });
            });

        });

        res.json({ message: "Meal Uploaded" });
    });
});

// MILK SECTION
router.get("/milk", function (req, res, next) {
    // GET MILK DATA
    con.query("SELECT * FROM milk ORDER BY milk_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.post("/milk", function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) throw err;

        // FOR FILES
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var shuffled = str.split('').sort(function () { return 0.5 - Math.random() }).join('');
        var finalShuffled = shuffled.substring(0, 6);

        var oldpath = files.image.path;
        var newpath = path.join(__dirname, "uploaded_images", "image_" + finalShuffled + "_" + files.image.name);

        var textData = JSON.parse(fields.textdata);
        var imageName = "image_" + finalShuffled + "_" + files.image.name;

        console.log(textData);

        // UPLOAD IMAGE
        // fs.rename(oldpath, newpath, function (err) {
        //     if (err) throw err;

        //     // SEND TO ONLY SELECTED STUDENTS
        //     let selected = textData['students'].filter(function (student) {
        //         return student.studentSelected;
        //     })

        //     selected.forEach(eachStudent => {
        //         // UPDATE DATABASE
        //         con.query("INSERT INTO meal (meal_student, meal_type, meal_well, meal_photo, meal_note, meal_uploaded_by) VALUES ('" + eachStudent['studentId'] + "', '" + textData['activeOption'][0]['name'] + "', '" + textData['howMuchOption'][0]['name'] + "', '" + imageName + "','" + textData['notes'] + "', '" + textData['loginId'] + "')", function (err, result, fields) {
        //             if (err) throw err;
        //         });
        //     });

        // });

        res.json({ message: "Meal Uploaded" });
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