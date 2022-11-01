const express = require("express");
const {createUser,
    loginUser,
    logoutUser, 
    forgotPassword, 
    resetPassword, 
    userDetails, 
    updatePassword, 
    updateProfile, 
    getAllUsers,
    getSingleUser,
    updateRole,
    deleteUser,
} = require("../controller/userController");
const router = express.Router();
const {isAuthenUser,authorRole} = require("../middleware/auth");

router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);

router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAuthenUser ,userDetails);
router.route("/me/update").put(isAuthenUser ,updatePassword);
router.route("/me/update/info").put(isAuthenUser ,updateProfile);

router.route("/admin/users").get(isAuthenUser,authorRole("admin"), getAllUsers);
router.route("/admin/user/:id").get(isAuthenUser,authorRole("admin"),
         getSingleUser).put(isAuthenUser,authorRole("admin"),
         updateRole).delete(isAuthenUser, authorRole("admin"), deleteUser);


module.exports = router