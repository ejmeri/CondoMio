var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0",  () =>  { console.log("Connected"); });