// Route.js

const express = require("express")
const router = express.Router();
const fs = require('fs');


const accountRoutes = require('./account.js');   //import account route
router.use(accountRoutes);  //use accountRoutes


module.exports = router;