var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kinderco"
});

router.get("/", function (req, res, next) {
    res.send("POST PAGE");
});

// NOTICE
router.get("/notice", function (req, res, next) {
    // SEND THE NOTICE DATA
    res.send("OK");
});

router.post("/notice", function (req, res, next) {
    const title = req.body.title;
    const photo = req.body.photo;
    const notes = req.body.notes;


    con.connect(err => {
        if (err) throw err;
        console.log("Connected");

        res.json({ message: JSON.stringify({ title, photo, notes }) });
    });
});

module.exports = router;