//setting up express and routing app
const express = require("express");
const router = express.Router();
const {upload} = require("../helpers/userMulter");

//getting the controllers
const basicController = require("../controllers/basicController.js");

router.get("/products/:shopID", basicController.getProducts);
router.get("/single-product/:productID", basicController.getSingleProduct);
router.get("/product-form", basicController.productForm);
router.post("/upload-product", upload.single('productPic'), basicController.uploadProduct);
router.get("/shops", basicController.getShops);
router.post("/postOrder", basicController.postOrder);
router.get("/userOrderList/:userID", basicController.getUserOrderList);
router.get("/orderList/:orderID", basicController.getOrderList);
router.get("/shopOrderList/:shopID", basicController.getShopOrderList);
router.post("/manageOrder", basicController.manageOrder);

module.exports = router;