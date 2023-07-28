const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add',(req,res)=>{
    console.log(req.body);

    //saving the data to mongodb
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    
});

//getall

router.get('/getall',(req,res)=>{
    res.send('response getall');
});

//getbyid

router.get('/getbyid',(req,res)=>{
    res.send('response form getbyid');
});

module.exports=router 