const express = require("express");
const app = express();
const errorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//router import
const product = require("./routes/productRoute");
const user = require("./routes/userRoute.js")
const order = require("./routes/orderRoute.js")

app.use("/api/v2", product);
app.use("/api/v2", user);
app.use("/api/v2", order);
app.use(errorHandler);


module.exports = app