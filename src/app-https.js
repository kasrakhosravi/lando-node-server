'use strict';

// global dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const app = express();

// Create our HTTPS server options
const key = fs.readFileSync('/certs/cert.key');
const cert = fs.readFileSync('/certs/cert.crt');

const homepageHandler = function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('I am on homepage');
};

const aboutpageHandler = function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('I am on about page');
};

// Create our servers
https.createServer({key, cert}, app).listen(443);
http.createServer(app).listen(3000);

// Basic HTTP response
app.get('/', homepageHandler);
app.get('/about', aboutpageHandler);
