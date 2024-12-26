const mongoose = require('mongoose')
const productschema = new mongoose.Schema  ({
    name:String,
    price: String,
    description:String,
    images :[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numofReviews:String,
    createAt:Date,

 })

 const productmodel =mongoose.model('product',productschema); 
 module.exports =productmodel;