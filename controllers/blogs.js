const Blog = require('../Model/Blog');
const ErrorGenerator = require('../util/errorGenerator');
const { ObjectId } = require('mongoose').Types;

const getBlogs = async(req) => {
    let blogs;
    if(req.user.role === 'user'){
        blogs = await Blog.find({author:ObjectId(req.user._id)})
    }
    else{
        blogs = await Blog.find();
    }
    const result = {success:true,data:{blogs}};
    return result
}

const createBlog = async(req) => {
    const {
        title,
        description,
    } = req.body;
    if(!title || !description){
        return new ErrorGenerator(false, 400, 'Please provide all details for blog')
    }
    const blog = {
        title,
        description,
        author:req.user._id
    }
    const createdBlog = await Blog.create(blog);
    if(!createdBlog){
        return new ErrorGenerator(false, 500, 'Something went wrong')
    }
    return {success:true,data:{createdBlog}};
}

module.exports = {
    getBlogs,
    createBlog
}