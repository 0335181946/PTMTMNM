// create token and saving that in cookies
const sendToken = (user,statusCode,res) =>{

    const token = user.getJwtToken();

// Options for cookies
//process.env.JWT_EXPIRES * 24 * 60 * 60 * 1000
   const options = {
       expires: new Date(Date.now() + 180000 * 24 * 60 * 60 * 1000
       ),
       httpOnly: true
   };

   res.status(statusCode).cookie("token",token,options).json({
       success: true,
       user,
       token
   });
}

module.exports = sendToken;