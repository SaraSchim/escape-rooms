var app = require('express')();
var BodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var mailService = require('./email');
var jwt = require('jsonwebtoken');


app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json());
app.use(cors());

var mongoDb = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var order = new Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true  },
        telephone: { type: String, require: true  },
        date: { type: String, require: true  },
        num: { type: Number, require: true  },
        type: { type: String, require: true  }
    }
);

var privateorder = new Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true  },
        telephone: { type: String, require: true  },
        party: { type: String, require: true  }
    }
);

var respond = new Schema(
    {
        name: { type: String, require: true },
        val: { type: String, require: true  },
        rate: { type: Number, require: true  }
    }
);

var date = new Schema(
    {
        date: { type: String, require: true  }
    }
);

var modelOrder = mongoose.model('order', order);

app.post("/order", (req, res) => {
    var getOrder = new modelOrder({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        date: req.body.date,
        num: req.body.num,
        type: req.body.type
    });

    getOrder.save(function (err, data, next) {
        console.log("order save")
        modelOrder.find()
            .exec(function (err, list) {
                if (err) return next(err);
                console.log(list);
            })
        if (err) return next(err);
        res.send("the orderId " + data._id);
    })

    var title = `הזמנה חדשה בנושא ${req.body.type}`
    var titleToBuyer = `הזמנתם חדר בריחה בנושא ${req.body.type}`
    var message = `פרטי ההזמנה:\n\nשם: ${req.body.name}\n\nאימייל: ${req.body.email}\n\nטלפון: ${req.body.telephone}סוג: ${req.body.type}\n\nתאריך: ${req.body.date} מספר משתתפים: ${req.body.num}`

    mailService.email("escapehome3@gmail.com", title, message);
    mailService.email(req.body.email, titleToBuyer, "אנו ניצור איתכם קשר בהקדם האפשרי\n\nתודה ובהנאה!\n\nצוות חדרי בריחה אצלכם בבית ♥");


})


app.get("/order", verifyToken, (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            modelOrder.find()
                .exec(function (err, list) {
                    if (err) return next(err);
                    res.send(list);
                });
        }
    });
});

var modelPrivateOrder = mongoose.model('privateorder', privateorder);

app.post("/private-order", (req, res) => {
    var getPrivateOrder = new modelPrivateOrder({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        party: req.body.party
    });

    getPrivateOrder.save(function (err, data, next) {
        console.log("private order save")
        modelPrivateOrder.find()
            .exec(function (err, list) {
                if (err) return next(err);
                console.log(list);
            })
        if (err) return next(err);
        res.send("the privateOrderId " + data._id);
    })

    var message = `פרטי ההזמנה:\n\n שם: ${req.body.name}\n\n טלפון: ${req.body.telephone}\n\n אימייל: ${req.body.email}\n\n ארוע: ${req.body.party}`

    mailService.email("escapehome3@gmail.com", "הזמנה חדשה בהתאמה אישית", message);
    mailService.email(req.body.email, "הזמנתם חדר בריחה בהתאמה אישית", "אנו ניצור איתכם קשר בהקדם האפשרי\n\nתודה ובהנאה!\n\nצוות חדרי בריחה אצלכם בבית ♥");


})

app.get("/private-order", verifyToken, (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            modelPrivateOrder.find()
                .exec(function (err, list) {
                    if (err) return next(err);
                    res.send(list);
                });
        }
    });
});

var modelRespond = mongoose.model('respond', respond);

app.post("/respond", (req, res) => {
    var getRespond = new modelRespond({
        name: req.body.name,
        val: req.body.val,
        rate: req.body.rate
    });

    getRespond.save(function (err, data, next) {
        modelRespond.find()
            .exec(function (err, list) {
                if (err) return next(err);
                console.log(list);
            })
        if (err) return next(err);
        res.send("the orderId " + data._id);
    })
})

app.get("/respond", (req, res, next) => {
    modelRespond.find()
        .exec(function (err, list) {
            if (err) return next(err);
            res.send(list);
        });
});


var modelWorldDate = mongoose.model('worlddate', date);

app.post("/world-date", (req, res) => {
    var getWorldDate = new modelWorldDate({
        date: req.body.date
    });

    getWorldDate.save(function (err, data, next) {
        console.log("date save")
        modelWorldDate.find()
            .exec(function (err, list) {
                if (err) return next(err);
                console.log(list);
            })
        if (err) return next(err);
        res.send("the dateId " + data._id);
    })
})

app.get("/world-date", (req, res, next) => {
    modelWorldDate.find()
        .exec(function (err, list) {
            if (err) return next(err);
            res.send(list);
        });
});

var modelYearDate = mongoose.model('yeardate', date);

app.post("/year-date", (req, res) => {
    var getYearDate = new modelYearDate({
        date: req.body.date
    });

    getYearDate.save(function (err, data, next) {
        console.log("date save")
        modelYearDate.find()
            .exec(function (err, list) {
                if (err) return next(err);
                console.log(list);
            })
        if (err) return next(err);
        res.send("the dateId " + data._id);
    })
})

app.get("/year-date", (req, res, next) => {
    modelYearDate.find()
        .exec(function (err, list) {
            if (err) return next(err);
            res.send(list);
        });
});



///////////////////////////
//send email question
app.post("/send-question", function (req, res) {
    let message = `${req.body.name} שואל:\n\n${req.body.message}\n\nטלפון: ${req.body.telephone}\n\nאימייל: ${req.body.email}`
    mailService.email("escapehome3@gmail.com", "שאלה לגבי החדר בריחה", message, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
            res.json({ status: "Email sent" });
        }
    });
});


///////////////////////////
//tokens:
var token;
//login - get a token
app.post('/login', (req, res) => {
    const user = {
        name: req.body.name,
        password: req.body.password,
    }
    console.log("user", user);
    if (user.name === 's' && user.password == 6) {
        token = jwt.sign({ user }, 'secretkey', { expiresIn: '1h' })
        console.log(token)
        res.status(200).json({ token: token });
    } else {
        res.status(403).json({
            message: 'oops... you are not the admin....'
        })
    }
});


//protected route - show orders
app.post('/show-orders', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'show orders',
                authData
            });
        }
    });
});

//verify Token
function verifyToken(req, res, next) {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}



var server = app.listen(5000, function () {
    console.log("server run...")
})

