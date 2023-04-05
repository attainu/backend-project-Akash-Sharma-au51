const express = require('express')
const router = express();
const orders = require('../models/order.js')
const bodyparser = require('body-parser')
router.use(bodyparser.urlencoded({extended:true}))

// home 
router.get('/',(req,res)=>{
    if(req.isAuthenticated()){
        res.redirect('../views/dashboard.ejs');
    } else{
        res.render('../views/signin.ejs')
    }
})

