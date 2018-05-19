var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);

var path = require('path');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

var db = require('./models/database'); // database and tables
const consign = require('consign');

consign()
    .into(app);

db.sequelize.sync().then(function () {
    server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", () => {
        console.log("Connected");
    });
});