const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:5000/CRUD_DB', (err) => {
    if (!err) {
        console.log('DB Connected successfully with mongoose....')
    } else {
        console.log(`There is an error.. Please check the below log for more details \n ${JSON.stringify(err,undefined,3)}`);
    }
});

module.exports = mongoose;