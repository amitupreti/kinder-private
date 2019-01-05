var express = require("express");
var router = express.Router();
var mysql = require('mysql');

router.post("/", (req, res, next) => {

    const account_type = req.body.accountType;

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "kinderco"
    });

    if (account_type == "staff") {
        // STAFF DETAILS
        const staff_email = req.body.email;
        const staff_password = req.body.password;

        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");

            // CHECK INTO admin_staff WHETHER THE USER EXISTS
            con.query("SELECT * FROM admin_staff WHERE staff_admin_email='" + staff_email + "'", function (err, result, fields) {
                if (err) throw err;

                if (result.length) {
                    let staff_admin_id = result[0]['staff_admin_id'];

                    con.query("SELECT * FROM staff WHERE staff_email='" + staff_email + "'", function (err, result) {
                        if (err) throw err;

                        if (result.length) {
                            console.log("User Already Registered!");
                            res.json({ message: "User Already Registered!" });
                        } else {
                            // INSERT INTO DATABASE
                            con.query("INSERT INTO staff VALUES (NULL, " + staff_admin_id + ", '" + staff_email + "', '" + staff_password + "', '5678')", function (err, result) {
                                if (err) throw err;

                                res.json({ message: "Account Created Successfully" });
                            });
                        }
                    });
                } else {
                    console.log("Sorry, Email not registered, Please contact your school");
                    res.json({ message: "Sorry, Email not registered, Please contact your school" });
                }
            });
        });
    } else if (account_type == "parent") {
        // PARENT DETAILS

        // STAFF DETAILS
        const parent_email = req.body.email;
        const parent_password = req.body.password;

        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");

            // CHECK INTO admin_parent WHETHER THE USER EXISTS
            con.query("SELECT * FROM students WHERE student_parent_email='" + parent_email + "'", function (err, result, fields) {
                if (err) throw err;

                if (result.length) {
                    let parent_id = result[0]['student_id'];

                    con.query("SELECT * FROM parent WHERE parent_email='" + parent_email + "'", function (err, result) {
                        if (err) throw err;

                        if (result.length) {
                            console.log("User Already Registered!");
                            res.json({ message: "User Already Registered!" });
                        } else {
                            // INSERT INTO DATABASE
                            con.query("INSERT INTO parent VALUES (NULL, " + parent_id + ", '" + parent_email + "', '" + parent_password + "', '5678')", function (err, result) {
                                if (err) throw err;

                                res.json({ message: "Account Created Successfully" });
                            });
                        }
                    });
                } else {
                    console.log("Sorry, Email not registered, Please contact your school");
                    res.json({ message: "Sorry, Email not registered, Please contact your school" });
                }
            });
        });
    } else {
        console.log("INVALID");
    }
});

module.exports = router;