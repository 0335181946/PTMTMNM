const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "plesase enter a name of a product"],
        trim: true,
        maxlength: [15,"product name not exceed than 20 characters"]
    },
    description:{
        type: String,
        required: [true, "please add a desc of your product"],
        maxlength: [4000, "des is cannot exceed than 4000 characters"]
    },
    price: {
        type: Number,
        required: [true, "please add a price for your prouduct"],
        maxlength:[8, "price can not exceed than 8 character"],
    },
    color:{
        type: String,
    },
    size:{
        type: String,
    },
    images:[{
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        }     
    ],
    category:{
        type: String,
        required:[true, "add category"],
    },
    Stock:{
        type: Number,
        required: [true, "please add a stock of your product"],
        maxLength: [3, "des is cannot exceed than 3 characters"]
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required: true
    },
    createAt:{
        type:Date,
        default: Date.now()
    }
})


module.exports = mongoose.model("Product", productSchema);