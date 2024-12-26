const orderModel = require('../models/orderModel');
exports.createorder = async (req, res) => {

const cartItems =req.body;
const amount =Number ( cartItems.reduce((acc,item)=>(acc + item.product.price *item.qty),0)).toFixed(2);
const status ='pending';
 const order=await orderModel.create({cartItems,amount,status})

    console.log(amount)
    res.json({
        success: true,
        order
        
    });
};
