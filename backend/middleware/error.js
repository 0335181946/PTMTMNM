const { JsonWebTokenError } = require("jsonwebtoken");
const errorHandler = require("../utils/errorHandler");

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || "ERROR SERVER"


    //mongodb wrong id
    if(err.name === "CastError"){
        const message  = `Resources not found with this is Invalid ${err.path}`;
        err = new errorHandler(message, 404);
    }

    //trung email dang ki
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new errorHandler(message,400);
    }

    //wrong jwt code
     if(err.code === "jsonWebTokenError"){
        const message = `Your url is invalid please try again`;
        err = new errorHandler(message,400);
    }
    //JWT expored error
    if(err.code === "TokenExporedError"){
        const message = `Your url is expired please try again`;
        err = new errorHandler(message,400);
    }



    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};


