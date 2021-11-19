const express = require('express');
const app = express();
const fs = require('fs');


const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const dataPath = '/Users/tarik/Desktop/react/my-app/react-nodejs/reactapp/src/accounts.json';

// util functions

const saveAccountData=(data) =>{
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(dataPath,stringifyData);
}

const getAccountData = () =>{

    const jsonData = fs.readFileSync(dataPath);

    return JSON.parse(jsonData);
}

// reading the data
app.get('/account', (req, res) => {
    fs.readFileSync(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
});

// add account to Json file
app.post('/account/addaccount', (req,res) => {

    var existAccounts = getAccountData();

    //console.log("**** Add account Printing existAccount BELOW");
    //console.log(existAccounts);
    
    //const newAccountID = Math.floor(10 + Math.random() * 9);

    //console.log("NEW ID CREATED and adding to the EXISTEDaccount");

    //console.log(req.body);

    //existAccouts[newAccountID] = req.body; // this is for attach unique ID for the json object

    existAccounts.push(req.body);



    console.log(existAccounts);

    //console.log("BELOW find id******************");

    //console.log(existAccounts.p);
    
    saveAccountData(existAccounts);

    res.send({success: true, msg:'account added!!'});

});

// read - get all accounts from json file

app.get('/account/list',(req,res) => {
    //console.log(dataPath);
    const accounts = getAccountData();
    res.send(accounts);

});

// update an account with id using - PUT -  method
app.put('/account/update/:id',(req,res) => {
    console.log("inside update servejs");
   
    var existAccounts = getAccountData();
    const paramsInfo = req.params.id;

    var userId=paramsInfo.split('*')[0];
    var firstNameUpdated = paramsInfo.split('*')[1];
    var emailUpdated=paramsInfo.split('*')[2];
    var indexUser = existAccounts.findIndex(user=>user.firstName === userId);

    existAccounts[indexUser].firstName=firstNameUpdated;
    existAccounts[indexUser].email=emailUpdated;
   
    saveAccountData(existAccounts)
   
   


});

// delete - using delete method
app.delete('/account/delete/:id', (req, res) => {
    console.log("Triggered app.delete node !!!");
   
    var existAccounts = getAccountData();
    const userId = req.params.id;
    var indexUser = existAccounts.findIndex(user=>user.firstName === userId);
    console.log(indexUser);
    if (indexUser > -1) {   existAccounts.splice(indexUser, 1);}
    saveAccountData(existAccounts);


  });


app.get('/', (req,res) => {
    res.send('App Works !');
});



app.listen(port, () => console.log(`listining onn port ${port}`));



