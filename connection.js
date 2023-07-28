const mongoose = require('mongoose');
const url = 'mongodb+srv://virendra_verma:virendra@cluster0.qfghr8c.mongodb.net/virendra?retryWrites=true&w=majority'

//asynchronouse function.-returns a promise
mongoose.connect(url)
.then((result) => {
    console.log('connected to mongodb');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;
