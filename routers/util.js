const multer = require('multer');
const express = require('express');
const router = express.Router();
const uploader = multer({ dest: './uploads' });
router.post('/uploadfile', uploader.single('myfile'),(req,res)=>{
    res.json({message:'file uploaded successfully'});

})
module.exports = router;
