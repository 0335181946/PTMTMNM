const express = require("express");
const { getAllProducts, createProduct,updateProduct,deleteProduct,getSingleProduct } = require("../controller/productController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).get(getSingleProduct).delete(deleteProduct);



module.exports = router