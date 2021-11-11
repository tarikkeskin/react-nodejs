const express = require("express")
const accountRoutes = express.Router();
const fs = require('fs');

const dataPath = '/Users/tarik/Desktop/react/my-app/react-nodejs/crud-jsonfile/details/useraccount.json';

// util functions

const saveAccountData=(data) =>{
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(dataPath,stringifyData);
}

const getAccountData = () =>{
    console.log(dataPath);
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
}

// reading the data
accountRoutes.get('/account', (req, res) => {
    fs.readFileSync(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
});

// add account to Json file
accountRoutes.post('/account/addaccount', (req,res) => {

    var existAccounts = getAccountData();
    
    const newAccountID = Math.floor(100000 + Math.random() * 900000);

    existAccounts[newAccountID] = req.body;

    console.log(existAccounts);
    
    saveAccountData(existAccounts);

    res.send({success: true, msg:'account added!!'});

});

// read - get all accounts from json file

accountRoutes.get('/account/list',(req,res) => {
    console.log(dataPath);
    const accounts = getAccountData();
    res.send(accounts);

});

// update an account with id using - PUT -  method
accountRoutes.put('/account/:id',(req,res) => {
    var existAccounts = getAccountData();
    fs.readFile(dataPath,'utf8',(err,data) =>{
        const accountId = req.params['id'];
        existAccounts[accountId] = req.body;
        saveAccountData(existAccounts);
        res.send(`accounts with ${accountId} has been updated `)
    },true);
});

// delete - using delete method
accountRoutes.delete('/account/delete/:id', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      var existAccounts = getAccountData()
      const userId = req.params['id'];
      delete existAccounts[userId]; 
      saveAccountData(existAccounts);
      res.send(`accounts with id ${userId} has been deleted`)
    }, true);
  })



module.exports = accountRoutes