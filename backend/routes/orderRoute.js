const express = require("express");
const { createOrder, getSingleOrder, getAllOrders, getAdminAllOrder, updateAdminOrder, deleteOrder } = require("../controller/orderController");
const { isAuthenUser, authorRole } = require("../middleware/auth");
const router = express.Router();


router.route("/order/new").post(isAuthenUser, createOrder);
router.route("/order/:id").get(isAuthenUser, getSingleOrder);
router.route("/orders/me").get(isAuthenUser, getAllOrders);
router.route("/admin/orders").get(isAuthenUser,authorRole("admin") ,getAdminAllOrder);
router.route("/admin/order/:id").put(isAuthenUser,authorRole("admin") ,updateAdminOrder)
                                .delete(isAuthenUser,authorRole("admin") ,deleteOrder);


module.exports = router