import express from 'express'
import data from '../data.js';
import User from '../models/userModel.js';
import Blog from '../models/blogModel.js';
import Product from '../models/productModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async(req,res) =>{

    //seed for users
    await User.remove({});
    const createdUser = await User.insertMany(data.users);

    //seed for blogs
    await Blog.remove({});
    const createdBlog = await Blog.insertMany(data.blogs);

    //seed for products
    await Product.remove({});
    const createdProduct = await Product.insertMany(data.products);


    res.send({createdUser, createdBlog, createdProduct});
});

export default seedRouter;