const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cruddb', (err) => {
    if(!err)
        console.log('MongoDB Connection succeeded...');
    else
    console.log('Error in DB Connection ' + JSON.stringify(error, undefined, 2));
});

module.exports = mongoose;