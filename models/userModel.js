const {model, Schema} = require('../connection');
const myschema = new Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    avater:String,

});
module.exports=model('users', myschema);
