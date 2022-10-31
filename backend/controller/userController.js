const User = require("../models/userModel.js");
const errorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendMail = require("../utils/sendMail.js");

//register
exports.createUser = catchAsyncErrors(async (req,res,next) =>{
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id: "http://test.com",
            url: "http://test.com"
        }
    })

    sendToken(user,201,res);
});

//login 
exports.loginUser = catchAsyncErrors(async( req, res, next) =>{
    const {email,password} = req.body;

    if(!email || !password) {
        return next(new errorHandler("please enter your email or password exacly", 400));
    }
    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new errorHandler("user is not found with this email & password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new errorHandler("user is not found with this email & password", 401));
    }
    sendToken(user,201,res);
})

//log out
exports.logoutUser  =catchAsyncErrors(async (req,res,next) =>{
    res.cookie("token", null,{
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    
    res.status(200).json({
        success: true,
        message: "log out success",
    })
})

//forgot password
exports.forgotPassword = catchAsyncErrors(async (req,res,next) =>{
    const user = await User.findOne({email: req.body.email});

    if(!user){
        return next(new errorHandler("user not found with this email", 404));
    }

    //get resetpass token
    const resetToken = user.getResetToken();
    await user.save({
        validateBeforeSave: false
    });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;
    const message = `your password reset token is: - \n \n ${resetPasswordUrl}`;

    try{

        await sendMail({
            email: user.email,
            subject: `TQ_Futsal password recovery`,
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email send to ${user.email} success`,
        });


    }catch(error){
        user.resetPasswordToken = undefined;
        user.resetPasswordTime = undefined;
        await user.save({
            validateBeforeSave: false
        });

        return next(new errorHandler(error.message))
    }
})


