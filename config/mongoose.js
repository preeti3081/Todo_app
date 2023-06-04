const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_app_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to database:'));
db.once('open', () => {
  console.log('Successfully connected to database');
});

module.exports = db;
