const errorHandler = require("../utils/errorHandler");

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || "ERROR SERVER"


    //mongodb wrong id
    if(err.name === "CastError"){
        const message  = `Resources not found with this is Invalid ${err.path}`;
        err = new errorHandler(message, 404);
    }


    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};