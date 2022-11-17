//setting up express and routing app
const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController.js");

router.get("/", authController.showLoginPage)
router.post("/login", authController.login);
router.post("/login-form", authController.loginPage);



module.exports = router;