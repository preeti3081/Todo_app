const mongoose = require('mongoose');

//schema defined
const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

//what todo will be called in mongodb
const todo = mongoose.model('todo',todoSchema);
module.exports = todo;