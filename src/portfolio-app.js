var history = require('connect-history-api-fallback');
var express = require('express');

var app = express();
app.use(history());