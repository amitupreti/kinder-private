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

const getToday = () => {
    // GET TODAYS DATE FOR ATTENDENCE
    let date = new Date();
    let addZeros = num => ("00" + String(num)).slice(-2);
    let today = date.getFullYear() + '-' + addZeros(Number(date.getMonth()) + 1) + '-' + addZeros(date.getDate());

    return today;
}

router.get("/", function (req, res, next) {
    res.status(200).json({ message: "POST PAGE" });
});

// OBSERVATION
router.get("/observation", function (req, res, next) {
    // SEND THE OBSERVATION DATA
    con.query("SELECT * FROM observation ORDER BY observation_id DESC", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.status(200).json(result);
    });
});

router.get("/observation/:student_email", function (req, res, next) {
    let student_email = req.params.student_email;
    // SEND THE OBSERVATION DATA
    con.query("SELECT * FROM observation WHERE observation_student='" + student_email + "' ORDER BY observation_id DESC", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.status(200).json(result);
    });
});

router.post("/observation", function (req, res, next) {
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

        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;

            // SEND TO ONLY SELECTED STUDENTS
            let selected = textData['students'].filter(function (student) {
                return student.studentSelected;
            })

            selected.forEach(eachStudent => {
                // UPDATE DATABASE
                con.query("INSERT INTO observation (observation_student, observation_milestone, observation_time, observation_photo, observation_note, observation_uploaded_by) VALUES ('" + eachStudent['studentId'] + "', '" + textData['milestone'] + "', '" + textData['time'] + "', '" + imageName + "','" + textData['notes'] + "', '" + textData['loginEmail'] + "')", function (err, result, fields) {
                    if (err) throw err;
                });
            });

        });

        res.json({ message: "Observation Uploaded" });
    });
});

// NOTICE
router.get("/notice", function (req, res, next) {
    // SEND THE NOTICE DATA
    con.query("SELECT * FROM notice ORDER BY notice_id DESC", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.status(200).json(result);
    });
});

router.get("/notice/:student_email", function (req, res, next) {
    // SEND THE NOTICE DATA
    con.query("SELECT * FROM notice ORDER BY notice_id DESC", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
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

            con.query("INSERT INTO notice (notice_title, notice_photo, notice_note, notice_uploaded_by) VALUES ('" + textData['title'] + "', '" + imageName + "', '" + textData['notes'] + "', '" + textData['loginEmail'] + "')", function (err, result, fields) {
                if (err) throw err;
            });

        });

        res.json({ message: "Notice Uploaded" });
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

router.get("/incident/:student_email", function (req, res, next) {
    let student_email = req.params.student_email;
    // GET INCIDENT DATA
    con.query("SELECT * FROM incident WHERE incident_student='" + student_email + "' ORDER BY incident_id DESC", function (err, result, fields) {
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
                con.query("INSERT INTO incident (incident_student, incident_title, incident_note, incident_photo, incident_time, incident_uploaded_by) VALUES ('" + eachStudent['studentId'] + "', '" + textData['title'] + "', '" + textData['notes'] + "', '" + imageName + "','" + textData['time'] + "', '" + textData['loginEmail'] + "')", function (err, result, fields) {
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

router.get("/meal/:student_email", function (req, res, next) {
    let student_email = req.params.student_email;
    // GET MEAL DATA
    con.query("SELECT * FROM meal WHERE meal_student='" + student_email + "' ORDER BY meal_id DESC", function (err, result, fields) {
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
                con.query("INSERT INTO meal (meal_student, meal_type, meal_well, meal_photo, meal_note, meal_uploaded_by) VALUES ('" + eachStudent['studentId'] + "', '" + textData['activeOption'][0]['name'] + "', '" + textData['howMuchOption'][0]['name'] + "', '" + imageName + "','" + textData['notes'] + "', '" + textData['loginEmail'] + "')", function (err, result, fields) {
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

router.get("/milk/:student_email", function (req, res, next) {
    let student_email = req.params.student_email;
    // GET MILK DATA
    con.query("SELECT * FROM milk WHERE milk_student='" + student_email + "' ORDER BY milk_id DESC", function (err, result, fields) {
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
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;

            // SEND TO ONLY SELECTED STUDENTS
            let selected = textData['students'].filter(function (student) {
                return student.studentSelected;
            })

            selected.forEach(eachStudent => {
                // UPDATE DATABASE
                con.query("INSERT INTO milk (milk_student, milk_time, milk_vol, milk_photo, milk_note, milk_uploaded_by) VALUES ('" + eachStudent['studentId'] + "', '" + textData['time'] + "', '" + textData['volOfMilk'][0]['name'] + "', '" + imageName + "','" + textData['notes'] + "', '" + textData['loginEmail'] + "')", function (err, result, fields) {
                    if (err) throw err;
                });
            });

        });

        res.json({ message: "Milk Uploaded" });
    });
});

// NAP SECTION
router.get("/nap", function (req, res, next) {
    // GET NAP DATA
    con.query("SELECT * FROM nap ORDER BY nap_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.get("/nap/:student_email", function (req, res, next) {
    let student_email = req.params.student_email;
    // GET NAP DATA
    con.query("SELECT * FROM nap WHERE nap_student='" + student_email + "' ORDER BY nap_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.post("/nap", function (req, res, next) {
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
                con.query("INSERT INTO nap (nap_student, nap_photo, nap_note, nap_uploaded_by) VALUES ('" + eachStudent['studentId'] + "', '" + imageName + "', '" + textData['notes'] + "', '" + textData['loginEmail'] + "')", function (err, result, fields) {
                    if (err) throw err;
                });
            });

        });

        res.json({ message: "Nap Uploaded" });
    });
});

// MEDICINE SECTION
router.get("/medicine", function (req, res, next) {
    // GET NAP DATA
    con.query("SELECT * FROM medicine ORDER BY medicine_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.get("/medicine/:student_email", function (req, res, next) {
    let student_email = req.params.student_email;
    // GET MEDICINE DATA
    con.query("SELECT * FROM medicine WHERE medicine_student='" + student_email + "' ORDER BY medicine_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.post("/medicine", function (req, res, next) {
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
                con.query("INSERT INTO medicine (medicine_student, medicine_photo, medicine_note, medicine_uploaded_by) VALUES ('" + eachStudent['studentId'] + "', '" + imageName + "', '" + textData['notes'] + "', '" + textData['loginEmail'] + "')", function (err, result, fields) {
                    if (err) throw err;
                });
            });

        });

        res.json({ message: "Medicine Uploaded" });
    });
});

// DIAPER SECTION
router.get("/diaper", function (req, res, next) {
    // GET DIAPER DATA
    con.query("SELECT * FROM diaper ORDER BY diaper_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.get("/diaper/:student_email", function (req, res, next) {
    let student_email = req.params.student_email;
    // GET DIAPER DATA
    con.query("SELECT * FROM diaper WHERE diaper_student='" + student_email + "' ORDER BY diaper_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.post("/diaper", function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) throw err;

        var textData = JSON.parse(fields.textdata);

        // SEND TO ONLY SELECTED STUDENTS
        let selected = textData['students'].filter(function (student) {
            return student.studentSelected;
        })

        selected.forEach(eachStudent => {
            // UPDATE DATABASE
            con.query("INSERT INTO diaper (diaper_student, diaper_change, diaper_num, diaper_note, diaper_uploaded_by) VALUES ('" + eachStudent['studentId'] + "', '" + textData['diaperChanged'][0]['name'] + "', '" + textData['num_diapers'] + "', '" + textData['notes'] + "', '" + textData['loginEmail'] + "')", function (err, result, fields) {
                if (err) throw err;
            });
        });

        res.json({ message: "Diaper Uploaded" });
    });
});

// POTTY SECTION
router.get("/potty", function (req, res, next) {
    // GET POTTY DATA
    con.query("SELECT * FROM potty ORDER BY potty_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.get("/potty/:student_email", function (req, res, next) {
    let student_email = req.params.student_email;
    // GET POTTY DATA
    con.query("SELECT * FROM potty WHERE potty_student='" + student_email + "' ORDER BY potty_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.post("/potty", function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) throw err;

        var textData = JSON.parse(fields.textdata);

        // SEND TO ONLY SELECTED STUDENTS
        let selected = textData['students'].filter(function (student) {
            return student.studentSelected;
        });

        console.log(textData);

        selected.forEach(eachStudent => {
            // UPDATE DATABASE
            con.query("INSERT INTO potty (potty_student, potty_went, potty_note, potty_uploaded_by) VALUES ('" + eachStudent['studentId'] + "', '" + textData['pottyWent'][0]['name'] + "', '" + textData['notes'] + "', '" + textData['loginEmail'] + "')", function (err, result, fields) {
                if (err) throw err;
            });
        });

        res.json({ message: "Potty Uploaded" });
    });
});

// PHOTO SECTION
router.get("/photos", function (req, res, next) {
    // GET POTTY DATA
    con.query("SELECT * FROM photos ORDER BY photo_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.get("/photos/:student_email", function (req, res, next) {
    let student_email = req.params.student_email;
    // GET PHOTOS DATA
    con.query("SELECT * FROM photos WHERE photo_student='" + student_email + "' ORDER BY photo_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.post("/photos", function (req, res, next) {
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
                con.query("INSERT INTO photos VALUES (NULL,'" + eachStudent['studentId'] + "', '" + imageName + "', '" + getToday() + "', '" + textData['loginEmail'] + "')", function (err, result, fields) {
                    if (err) throw err;

                    console.log("PHOTO INSERTED");
                });
            });
        });

        res.json({ message: "Nap Uploaded" });
    });
});

// MILESTONE SECTION
router.post("/milestone", function (req, res, next) {
    var studentMilestone = req.body.studentMilestone;
    var loginEmail = req.body.loginEmail;
    var milestoneType = req.body.milestoneType;


    studentMilestone.forEach(eachMilestone => {

        // SAVE THE MILESTONES IN DATABASE

        con.query("INSERT INTO milestone VALUES (NULL, '" + eachMilestone['selectedStudent'] + "', '" + eachMilestone['title'] + "', '" + milestoneType + "', '" + loginEmail + "')", function (err, result, field) {
            if (err) throw err;
        });

    });

    res.status(200).json({ message: "OK" });
});

// VIDEO SECTION
router.get("/video", function (req, res, next) {
    // GET POTTY DATA
    con.query("SELECT * FROM video ORDER BY video_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});

router.get("/video/:student_email", function (req, res, next) {
    let student_email = req.params.student_email;
    // GET VIDEO DATA
    con.query("SELECT * FROM video WHERE video_student='" + student_email + "' ORDER BY video_id DESC", function (err, result, fields) {
        if (err) throw err;

        res.status(200).json(result);
    });
});


router.post("/video", function (req, res, next) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        if (err) throw err;

        // FOR FILES
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var shuffled = str.split('').sort(function () { return 0.5 - Math.random() }).join('');
        var finalShuffled = shuffled.substring(0, 6);

        var oldpath = files.video.path;
        var newpath = path.join(__dirname, "uploaded_videos", "video_" + finalShuffled + "_" + files.video.name);

        var textData = JSON.parse(fields.textdata);
        var videoName = "video_" + finalShuffled + "_" + files.video.name;

        console.log(textData);
        console.log(videoName);

        // // UPLOAD VIDEO
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;


            // SEND TO ONLY SELECTED STUDENTS
            let selected = textData['students'].filter(function (student) {
                return student.studentSelected;
            })

            selected.forEach(eachStudent => {
                con.query("INSERT INTO video VALUES (NULL,'" + eachStudent['studentId'] + "', '" + videoName + "', '" + getToday() + "', '" + textData['loginEmail'] + "')", function (err, result, fields) {
                    if (err) throw err;

                    console.log("Video INSERTED");
                });
            });
        });

        res.json({ message: "Video Uploaded" });
    });
});

// TAG STUDENTS
router.post("/students", function (req, res, next) {
    // GET THE STUDENTS RELATED TO THE TEACHER RELATED TO ROOM

    const loginEmail = req.body.loginEmail;

    con.query("SELECT * FROM admin_staff WHERE staff_admin_email='" + loginEmail + "'", function (err, result, fields) {
        if (err) throw err;

        let roomId = result[0]['staff_room_id'];

        con.query("SELECT * FROM students WHERE student_room_id='" + roomId + "'", function (err, result, fields) {
            if (err) throw err;

            // console.log(result);

            res.status(200).json(result);
        });
    });

});

module.exports = router;