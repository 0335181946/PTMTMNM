import express from 'express'
import Product from '../models/productModel.js';

const productRouter = express.Router();


//get all product
productRouter.get('/all', async(req, res) =>{
    const products = await Product.find();
    res.send(products);
});


//get product by id
productRouter.get('/:id', async(req, res) =>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: "product not found"});
    }

});


export default productRouter;