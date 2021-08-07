var nodemailer = require('nodemailer');


exports.email = function (email, subject, text) {
    var transporter = nodemailer.createTransport({
        service: 'gmail.com',
        auth: {
            user: 'escapehome3@gmail.com',
            pass: 'xxxxxxxxx'
        }
    });

    var mailOptions = {
        from: 'escapehome3@gmail.com',
        to: email,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}
