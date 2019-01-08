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
  console.log("Connection Established!");
});

// GET NAME AND IMAGE OF A STUDENT FOR LOGGED PARENT
router.post('/student', function (req, res, next) {
  let studentId = req.body.studentId;

  con.query("SELECT * FROM students WHERE student_id='" + studentId + "'", function (err, result, field) {
    if (err) throw err;

    let studentName = result[0]['student_name'];
    let studentImage = result[0]['student_profile_image'];
    res.status(200).json({ studentName, studentImage });
  });
});

module.exports = router;
