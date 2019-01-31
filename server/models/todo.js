const mongoose = require('mongoose');

var Todo = mongoose.model('todo', {
    title: {
        type: String
    },
    description: {
        type: String
    },
    hashtag: {
        type: String
    },
    isArchive: {
        type: Boolean
    },
    isDeleted: {
        type: Boolean
    }
});

module.exports = {
    Todo
};