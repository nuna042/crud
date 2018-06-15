const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var employeeController =  require('./controllers/employee.controller');

var app = express();
app.use(bodyParser.json());

app.use('/employees', employeeController);

app.listen(3000, () => console.log('Server start at port : 3000'));