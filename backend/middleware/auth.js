const errorHandle = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenUser = catchAsyncErrors(async (req,res,next) =>{
    const {token} = req.cookies;

    if(!token){
        return next(new errorHandle("please login before",401));
    }

 //ma hoa
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decodedData.id);
    next();
})

//admin role
exports.authorRole = (...roles) =>{
    return (req,res,next) =>{
        if(!roles.includes(req.user.role)){
            return next(new errorHandle(`${req.user.role} can not access this request`));
        };
        next();
    }
}