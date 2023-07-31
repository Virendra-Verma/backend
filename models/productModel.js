const {model, Schema} = require('../connection');
const myschema = new Schema({
    title:String,
    discription:String,
    price:Number,
    category:String,
    Image:String
});
module.exports=model('product', myschema);