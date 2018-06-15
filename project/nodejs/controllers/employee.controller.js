const express = require('express');
var router = express.Router();

var { Employee } =  require('../models/employee.model');


// localhost:3000/employee/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in retriving Employees : '+ JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in  Employee  save : '+ JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;