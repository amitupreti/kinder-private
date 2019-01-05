var express = require("express");
var router = express.Router();
var mysql = require('mysql');

router.post("/", function (req, res, next) {

    // LOGIN DETAILS
    const loginEmail = req.body.loginEmail;
    const loginPassword = req.body.loginPassword;

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "kinderco"
    });

    con.connect(err => {
        if (err) throw err;
        console.log("Connected");

        // CHECK INSIDE staff
        con.query("SELECT * FROM staff WHERE staff_email='" + loginEmail + "' AND staff_password='" + loginPassword + "'", function (err, result, fields) {
            if (err) throw err;

            if (result.length) {
                // IF FOUND INSIDE staff
                res.json({
                    loginEmail: result[0]['staff_email'],
                    loginId: result[0]['staff_admin_id'],
                    loginType: 'staff',
                    success: true
                });
            } else {
                // IF NOT FOUND CHECK INSIDE parent
                con.query("SELECT * FROM parent WHERE parent_email='" + loginEmail + "' AND parent_password='" + loginPassword + "'", function (err, result, fields) {
                    if (err) throw err;

                    if (result.length) {
                        // IF FOUND INSIDE parent
                        res.json({
                            loginEmail: result[0]['parent_email'],
                            loginId: result[0]['parent_admin_id'],
                            loginType: 'parent',
                            success: true
                        });
                    } else {
                        // NOT FOUND INSIDE parent THEN NOT REGISTERED
                        res.json({
                            success: false
                        });
                    }
                });
            }
        });
    });
});

module.exports = router;