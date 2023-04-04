const express = require('express')
const router = express()
const orders = require('../models/order.js')
const bodyparser = require('body-parser')
router.use(bodyparser.urlencoded({extended:true}))

// home 
router.get('/',(req,res)=>{
    if(req.isAuthenticated()){
        res.redirect('home');
    } else{
        res.render()
    }
})

//form submiting
router.post('/submit',(req,res)=>{
    const item = req.body.item
    const qty = req.body.qty

    //creating order
    const orders = new orders

})

