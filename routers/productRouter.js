const express = require('express');
const router = express.Router();

router.get('/add',(req,res)=>{
    res.send('response form product add');
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