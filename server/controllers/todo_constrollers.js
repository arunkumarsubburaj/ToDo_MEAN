const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {
    Todo
} = require('./../models/todo');


//Get Method : 

router.get('/', (req, res) => {
    Todo.find({
        "isArchive": false,
        "isDeleted": false
    }, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(`Error in retrieving emplyees ${JSON.stringify(err,undefined,3)}`);
        }
    });
});

router.get('/archive', (req, res) => {
    Todo.find({
        "isArchive": true
    }, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(`Error in retrieving emplyees ${JSON.stringify(err,undefined,3)}`);
        }
    });
});

router.get('/bin', (req, res) => {
    Todo.find({
        "isDeleted": true
    }, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(`Error in retrieving emplyees ${JSON.stringify(err,undefined,3)}`);
        }
    });
});

// router.get('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id)) {
//         return res.status(400).send('No Record with given id' + req.params.id);
//     } else {
//         Todo.findById(req.params.id, (err, docs) => {
//             if (!err) {
//                 res.send(docs);
//             } else {
//                 console.log(`Error in retrieving emplyee with name 'Arun Kumar Subburaj' ${JSON.stringify(err,undefined,3)}`);
//             }
//         });
//     }
// });


//Post Method

router.post('/', (req, res) => {
    //Passing data from the body. Using postman we can add the data by modify data in the body tag as json since we need json
    var todo = new Todo(req.body);
    todo.save((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(`Error in saving new emplyee ${JSON.stringify(err,undefined,3)}`);
        }
    });
});




// Put/update mehtod

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No Record with given id' + req.params.id);
    }
    var todo = req.body;
    Todo.findByIdAndUpdate(req.params.id, {
        $set: todo
    }, {
        new: true
    }, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(`Error in updating the emplyee with id ${req.params.id} :  ${JSON.stringify(err,undefined,3)}`);
        }
    });
});

// router.put('/archive/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id)) {
//         return res.status(400).send('No Record with given id' + req.params.id);
//     }
//     var todo = req.body;
//     Todo.findByIdAndUpdate(req.params.id, {
//         $set: todo
//     }, {
//         new: true
//     }, (err, result) => {
//         if (!err) {
//             res.send(result);
//         } else {
//             console.log(`Error in updating the emplyee with id ${req.params.id} :  ${JSON.stringify(err,undefined,3)}`);
//         }
//     });
// });

// router.put('/bin/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id)) {
//         return res.status(400).send('No Record with given id' + req.params.id);
//     }
//     var todo = req.body;
//     Todo.findByIdAndUpdate(req.params.id, {
//         $set: todo
//     }, {
//         new: true
//     }, (err, result) => {
//         if (!err) {
//             res.send(result);
//         } else {
//             console.log(`Error in updating the emplyee with id ${req.params.id} :  ${JSON.stringify(err,undefined,3)}`);
//         }
//     });
// });

// Delete method

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No Record with given id' + req.params.id);
    }
    Todo.findByIdAndDelete(req.params.id, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(`Error in deleting the emplyee with id ${req.params.id} :  ${JSON.stringify(err,undefined,3)}`);
        }
    });
});

module.exports = router;