const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get('/expressed_backend',(req,res) => {
    res.send({express: 'your expressed is connected'});
});

const users = [
    {firstName: 'tarık'},
    {firstName: 'ali'}
];

app.get('/users', (req, res) => {
    console.log('api/users called!!!!')
    res.json(users);
});

app.post('/user', (req, res) => {
    
    const user = req.body.user;
    users.push(user);
    res.json("user added");

});


app.get('/', (req,res) => {
    res.send('App Works !');
});


app.listen(port, () => console.log(`listining onn port ${port}`));



