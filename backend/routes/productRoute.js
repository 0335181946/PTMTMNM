const express = require("express");
const { getAllProducts, createProduct,updateProduct,deleteProduct,getSingleProduct } = require("../controller/productController");
const { isAuthenUser, authorRole } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(isAuthenUser,authorRole("admin"),createProduct);

router.route("/product/:id")
    .put(isAuthenUser,authorRole("admin"),updateProduct)
    .get(getSingleProduct)
    .delete(isAuthenUser,authorRole("admin"),deleteProduct);



module.exports = router