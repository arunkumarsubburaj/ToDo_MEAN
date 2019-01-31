const express = require('express');
const bp = require('body-parser');
const cors = require('cors');

const {
    mongoose
} = require('./db.js');
var todoControllers = require('./controllers/todo_constrollers.js');

var app = express();
app.use(bp.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));
app.listen('3000', () => {
    console.log('server started at port no 3000');
});
app.use('/todo', todoControllers);