var http = require('http');
const express = require('express');
const residences = require('./data/residences');
const users = require('./data/users');
var cors = require('cors');

const app = express();

app.use(cors());

app.get('/residences', function (req, res, next) {
  res.json(residences.allResidences);
});

app.get('/user-wish-list', function (req, res, next) {
  res.json(users.allUsers);
});

var server = http.createServer(app);
server.listen(3001);

