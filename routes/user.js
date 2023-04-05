const express = require('express')
const router = express()
const orders = require('../models/order.js')
const bodyparser = require('body-parser')
router.use(bodyparser.urlencoded({extended:true}))

// home 
router.get('/',(req,res)=>{
    if(req.isAuthenticated()){
        res.redirect('dashboard');
    } else{
        res.render('signup')
    }
})

