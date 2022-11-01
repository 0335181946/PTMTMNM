const User = require("../models/userModel.js");
const errorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendMail = require("../utils/sendMail.js");
const crypto = require("crypto")

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
    const message = `your password reset token is:  \n \n ${resetPasswordUrl}`;

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
});


//reset password
exports.resetPassword = catchAsyncErrors(async(req, res, next) =>{

    //create token hash
    const  resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordTime: { $gt: Date.now()},
    });

    if(!user){
        return next(new errorHandler("reset password url is invalid or has been expired",400));
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new errorHandler("password is not match",400));
    }

    user.password =req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordTime = undefined;

    await user.save();
    sendToken(user,200,res);

});

//get user detail info
exports.userDetails = catchAsyncErrors(async(req,res,next) =>{
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success:true,
        user,
    });
});


//update password user
exports.updatePassword = catchAsyncErrors(async(req,res,next) =>{
    const user = await User.findById(req.user.id).select("+password");
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if(!isPasswordMatched){
        return next(
            new errorHandler("old password is incrorrect", 400));
    };
    if(req.body.newPassword !== req.body.confirmPassword){
        return next(
            new errorHandler("password not match with each orther", 400)
        );
    }
    user.password = req.body.newPassword;
    await user.save();

    sendToken(user,200, res);
});

//update profile user
exports.updateProfile = catchAsyncErrors( async(req,res,next) =>{
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    };
    //we add cloud letter then we are giving condition for the avatar
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success:true,
    })
});

//get all user - admin
exports.getAllUsers = catchAsyncErrors(async(req,res,next) =>{
    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
    });
});

//get single user detail - admin
exports.getSingleUser = catchAsyncErrors(async(req,res,next) =>{
    const user = await User.findById(req.params.id);

    if(!user){
        return next(new errorHandler("user not found with this id", 400));
    }

    res.status(200).json({
        success: true,
        user,
    });
});


//chang user role - admin
exports.updateRole = catchAsyncErrors( async(req,res,next) =>{
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    };
    //we add cloud letter then we are giving condition for the avatar
    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success:true,
        user
    })
});

//delete user - admin
exports.deleteUser = catchAsyncErrors( async(req,res,next) =>{
    
    //we remove cloud letter then we are giving condition for the avatar
    const user = await User.findById(req.params.id);

    if(!user){
        return next(new errorHandler("user is not found with this id ", 400));
    }
    await user.remove();

    res.status(200).json({
        success:true,
        message: "user delete success"
    })
});

