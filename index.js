const express = require('express');
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const app = express();
const methodOverride = require('method-override');
const db = require('./config/mongoose');
const todo = require('./models/todo');

app.use(expressLayouts);
//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.urlencoded());
// Add the method-override middleware
app.use(methodOverride('_method'));

//use express router
app.use('/',require('./routes'));

//set view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('assets'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    //interpolation used ``
    }
    console.log(`Server is running on port: ${port}`);
    
});