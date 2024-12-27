const productmodel = require('../models/productModel');
/// get product API = http://localhost:5000/api/products  
exports.getproduts = async (req, res) => {

  

    const cd = req.query.keyword ? {
        name: { 
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {};
    
    const products = await productmodel.find(cd);
    res.json({
        success: true,
        products,
    });
}    

 
/// get single  API = http://localhost:5000/api/products/:152
exports.getSingleproduct = async(req, res) => {
console.log(req.params.id,'ID')
 
try{
    const product= await productmodel.findById(req.params.id)
    res.json({
        success: true,
        product,
    })


}catch(error)
{
    res.status(404).json({
        success: flase,
        massage: error.massage,
    })
     
}

    
};
