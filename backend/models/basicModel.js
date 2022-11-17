let { query } = require("../helpers/db.js");


let getProduct = async (shopID) => {
    let sqlCommand = `SELECT product_id, shop_id, product_name, image_link, description, quantity, category, price FROM product WHERE shop_id = ${shopID};`
    let result = await query(sqlCommand);
    return result;
} 

let getSingleProduct = async (productID) => {
    let sqlCommand = `SELECT product_id, shop_id, product_name, image_link, description, quantity, category, price FROM product WHERE product_id = ${productID};`
    let result = await query(sqlCommand);
    return result;
} 

let insertProduct = async (shopID, imageLink, productName, description, price) => {
    let sqlCommand = `INSERT INTO product(shop_id, product_name, image_link, description, price) VALUES (${shopID}, "${productName}", "${imageLink}", "${description}", ${price});`
    let result = await query(sqlCommand);
    return result;
} 

let getShops = async () => {
    let sqlCommand = `SELECT  user_id, user_name, pass, first_name, last_name, user_type, image_link FROM user_info WHERE user_type = "vendor";`
    let result = await query(sqlCommand);
    return result;
} 

let getOrderToken = async () => {
    let sqlCommand = `SELECT COUNT(DISTINCT(order_id)) AS c FROM orders  WHERE 1;`
    let result = await query(sqlCommand);
    return result;
} 


let postOrder = async (userID, shopID, order_id, orderStatus, productName, qty, totalPrice, scheduledTime) => {
    let sqlCommand = `INSERT INTO orders( buyer_id, seller_id, order_id, order_status, product_name, qty, price, scheduled_time ) VALUES (${userID}, ${shopID}, ${order_id}, "${orderStatus}", "${productName}", ${qty}, ${totalPrice}, "${scheduledTime}");`
    let result = await query(sqlCommand);
    return result;
} 

let getUserOrderList = async (userID) => {
    let sqlCommand = `SELECT order_id FROM orders WHERE buyer_id = ${userID} GROUP BY order_id DESC;`
    let result = await query(sqlCommand);
    return result;
} 

let getOrderList = async (orderID) => {
    let sqlCommand = `SELECT id, buyer_id, seller_id, order_id, order_status, order_accept_time, scheduled_time, product_name, qty, price, first_name, last_name FROM orders JOIN user_info ON seller_id = user_info.user_id WHERE order_id = ${orderID};`
    let result = await query(sqlCommand);
    return result;
} 


let getShopOrderList = async (shopID) => {
    let sqlCommand = `SELECT order_id FROM orders WHERE seller_id = ${shopID} GROUP BY order_id DESC;`
    let result = await query(sqlCommand);
    return result;
} 

let manageOrder = async (orderID, status) => {
    let sqlCommand = `UPDATE orders SET order_status= "${status}" ,order_accept_time = CURRENT_TIMESTAMP WHERE order_id = ${orderID}`;
    let result = await query(sqlCommand);
    return result;
} 

module.exports = {
    getProduct,
    getSingleProduct,
    insertProduct,
    getShops,
    postOrder,
    getOrderToken,
    getUserOrderList,
    getOrderList,
    getShopOrderList,
    manageOrder
}