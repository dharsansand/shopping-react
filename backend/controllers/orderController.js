const orderModel = require('../models/orderModel');
const productmodel = require('../models/productModel');

exports.createorder = async (req, res) => {

const cartItems =req.body;
const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);

const status ='pending';
 const order=await orderModel.create({cartItems,amount,status})


 // updating stock

 cartItems.forEach(async (item)=> {
    const product = await productmodel.findById(item.product._id);
    product.stock = product.stock - item.qty;
    await product.save();
})


    console.log(amount)
    res.json({
        success: true,
        order
        
    });
};
