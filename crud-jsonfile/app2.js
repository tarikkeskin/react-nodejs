const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

// create  our express app

app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//route
const routes = require('./routes/Routes.js');
app.use('/',routes);

//start server
app.listen(3000, ()=> {
    console.log("listening port 3000 !!.");
});

app.get('/', (req, res) => {
    res.render('something', { layout: false });
});




