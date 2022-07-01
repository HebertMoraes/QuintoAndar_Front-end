var http = require('http');
const express = require('express');
const residences = require('./data/residences');
var cors = require('cors');

const app = express();

app.use(cors());

app.get('/residences', function (req, res, next) {
  res.json(residences.allResidences);
});

var server = http.createServer(app);
server.listen(3001);

