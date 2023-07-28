const express = require('express');

// intilize express app
const app = express();
const port = 5000;

//import router 
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
app.use(express.json());

//middlewares
app.use('/user',userRouter);
app.use('/product',productRouter);


//creating routes
app.get('/',(req,res)=>{
    res.send('response for express server');
    
})

// /home
app.get('/home',(req,res)=>{
    res.send('response form home');
})

// /add
app.get('/add',(req,res)=>{
    res.send('response form add');
})

//starting the server
app.listen(port, ()=>{
    console.log('express server started sussesfully');
});
