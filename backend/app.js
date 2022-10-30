const express = require("express");
const app = express();
const errorHandler = require("./middleware/error")

app.use(express.json());

//router import
const product = require("./routes/productRoute");

app.use("/api/v2", product);
app.use(errorHandler);


module.exports = app