const basicModel = require("../models/basicModel");

const getProducts = async (req, res) => {
    let shopID = req.params.shopID;
    let products;

    try{
        products = await basicModel.getProduct(shopID);
    }
    catch(e){
        console.log("ERROR in basic controller getProducts method");
        res.status(500);
    }
    let data = {
        products
    }
    res.status(200).json(data);
}

const getSingleProduct = async (req, res) => {
    let productID = req.params.productID;
    let products;

    try{
        products = await basicModel.getSingleProduct(productID);
    }
    catch(e){
        console.log("ERROR in basic controller getProducts method");
        res.status(500);
    }
    let data = {
        products
    }
    res.status(200).json(data);
}

const productForm = async (req, res) => {
    let shopID = req.session.shopID;
    let shopName = req.session.shopName;
    // console.log("product form " + shopID);
    res.render("upload-food", {shopID, shopName});
}


const uploadProduct = async (req, res) => {
    let shopID = req.body.shopID;
    let productName = req.body.productName;
    let description = req.body.description;
    let price = req.body.price;
    
    const file = req.file;
    if (!file) {
      const error = new Error('Please upload a file');
      error.httpStatusCode = 400;
      res.redirect("/");
      return next(error)
    }
    let fileName = "/images/" + file.filename;
    await basicModel.insertProduct(shopID, fileName, productName, description, price);
    res.redirect("/product-form");
}

const getShops = async (req, res) => {

    try{
        products = await basicModel.getShops();
    }
    catch(e){
        console.log("ERROR in basic controller getShops method");
        res.status(500);
    }
    let data = {
        products
    }
    res.status(200).json(data);
}


const postOrder = async (req, res) => {
    let data = req.body.data;
    console.log(data);
    let order_id;
    try {
        order_id = await basicModel.getOrderToken();
        order_id = order_id[0].c + 1;
    } catch (e) {
        console.log(e);
    }
    
    let userID = req.body.data.userID;
    let shopID = req.body.data.shopID;
    let orderStatus = "pending";
    let items = req.body.data.items;
    let scheduledTime = req.body.data.scheduledTime
    // let productName = req.body.data.product.product_name;
    // let qty = req.body.data.qty;
    // let totalPrice = req.body.data.totalPrice;
    // items.map( i => {
    //     let productName = i.product.product_name;
    //     let qty = i.qty;
    //     let totalPrice = i.totalPrice;

    // });
    for (let i = 0; i < items.length; i++) {
        let productName = items[i].product.product_name;
        let qty = items[i].qty;
        let totalPrice = items[i].totalPrice;
        try {
            await basicModel.postOrder(userID, shopID, order_id, orderStatus, productName, qty, totalPrice, scheduledTime);
        } catch (error) {
            console.log(error);
            // res.status(200).json({msg : "failed"});
        }
    }
    res.status(200).json({msg : "success"});

    
}


const getUserOrderList = async(req, res) => {
    let userID = req.params.userID;
    let orders;
    try {
        orders = await basicModel.getUserOrderList(userID);
        // console.log(orders);
        let data = {
            msg: "success",
            orders
        }
        res.json(data);
    } catch (e) {
        console.log(e);
    }

}

const getOrderList = async(req, res) => {
    let orderID = req.params.orderID;
    let orders;
    try {
        orders = await basicModel.getOrderList(orderID);
        // console.log(orders);
        let data = {
            msg: "success",
            orders
        }
        res.json(data);
    } catch (e) {
        console.log(e);
    }

}


const getShopOrderList = async(req, res) => {
    let shopID = req.params.shopID;
    let orders;
    try {
        orders = await basicModel.getShopOrderList(shopID);
        // console.log(orders);
        let data = {
            msg: "success",
            orders
        }
        res.json(data);
    } catch (e) {
        console.log(e);
    }

}

const manageOrder = async(req, res) => {
    let status = req.body.status;
    let orderID = req.body.orderID;
    // let orders;
    try {
        await basicModel.manageOrder(orderID, status);
        // console.log(orders);
        let data = {
            msg: "success",
        }
        res.json(data);
    } catch (e) {
        console.log(e);
        let data = {
            msg : "failed"
        }
        res.json(data);
    }

}

module.exports = {
    getProducts,
    getSingleProduct,
    productForm,
    uploadProduct,
    getShops,
    postOrder,
    getUserOrderList,
    getOrderList,
    getShopOrderList,
    manageOrder
}