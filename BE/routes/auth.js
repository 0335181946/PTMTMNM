const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//DANG KI TAI KHOAN
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        img: req.body.img,
    });
    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }     
});

//DANG NHAP

router.post("/login", async(req,res) =>{
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("sai username");

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const passwordd = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        passwordd != inputPassword && res.status(401).json("sai password");

        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
            process.env.JWT_SEC,
            {expiresIn:"3d"}
        );
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken}); 
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;