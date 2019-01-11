var express = require("express");
var router = express.Router();
var mysql = require('mysql');
var nodemailer = require('nodemailer');

// FOR RESET CODE
function getResetCode(length) {
    let str = "0123456789";
    let shuffled = str.split('').sort(function () { return 0.5 - Math.random() }).join('');
    let finalShuffled = shuffled.substring(0, length);
    return finalShuffled;
}

function sendEmail(resetCode, resetEmail) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'raidipesh353@gmail.com',
            pass: 'imatolymph123'
        }
    });

    var mailOptions = {
        from: 'raidipesh353@gmail.com',
        to: resetEmail,
        subject: 'Reset Code for Kinder Account',
        text: 'Reset Code : ' + resetCode
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}

router.post("/", function (req, res, next) {
    // RESET PASSWORD EMAIL
    const reset_email = req.body.email;

    // MAKE CONNECTION TO DATABASE
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "kinderco"
    });

    con.connect(function (err) {
        if (err) throw err;

        // CHECK INSIDE staff
        con.query("SELECT * FROM staff WHERE staff_email='" + reset_email + "'", function (err, result, fields) {
            if (err) throw err;

            if (!result.length) {
                // IF NOT FOUND INSIDE staff
                // CHECK INSIDE parent
                con.query("SELECT * FROM parent WHERE parent_email='" + reset_email + "'", function (err, result, fields) {
                    if (err) throw err;

                    if (!result.length) {
                        // IF NOT FOUND INSIDE parent

                        res.json({ message: "EMAIL NOT REGISTERED" });
                    } else {
                        // IF FOUND INSIDE parent

                        const resetCode = result[0]['parent_reset_code'];
                        sendEmail(resetCode, reset_email);
                        res.json({ message: "RESET CODE SENT TO YOUR EMAIL" });
                    }
                });
            } else {
                // IF FOUND INSIDE staff

                const resetCode = result[0]['staff_reset_code'];
                sendEmail(resetCode, reset_email);
                res.json({ message: "RESET CODE SENT TO YOUR EMAIL" });
            }
        });
    });
});

module.exports = router;