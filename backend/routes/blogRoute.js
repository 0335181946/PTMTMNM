import express from 'express'
import Blog from '../models/blogModel.js';

const blogRouter = express.Router();


//add post
blogRouter.post('/add', async(req,res)=>{
    const newBlog = new Blog({
        title: req.body.title,
        description: req.body.description,
    });
    const blog = await newBlog.save();
    res.send({
        _id: blog._id,
        title: blog.title,
        description: blog.description,
        author: blog.author
    });
});

//get all blog
blogRouter.get('/all', async(req, res) =>{
    const blogs = await Blog.find();
    res.send(blogs);
});

//get blog id - admin
blogRouter.get('/:id', async(req, res) =>{
    const blog = await Blog.findById(req.params.id);
    if(blog){
        res.send(blog);
    }else{
        res.status(404).send({message: "user not found"});
    }

});




export default blogRouter;