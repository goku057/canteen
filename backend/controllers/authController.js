const authModel = require("../models/authenticationModel");

const login = async(req, res)=>{
    let userID = req.body.userID;
    let userPass = req.body.userPass;
    // console.log("gg");
    let userInfo = await authModel.getUser(userID);
    // if(userInfo)
    // console.log(userInfo);
    if(userInfo.length == 0){
        let data = {
            msg : "failed"
        }
        res.status(200).json(data);
    }
    else if(userInfo[0].pass == userPass){
        let data = {
            msg : "success",
            userInfo : userInfo[0]
        }
        res.status(200).json(data);
    }
    else{
        let data = {
            msg : "failed",
            userInfo
        }
        res.status(200).json(data);
    }

}

const showLoginPage = async(req, res)=>{
    res.render("login");
}

const loginPage = async(req, res)=>{
    let userID = req.body.userID;
    let userPass = req.body.userPass;

    let userInfo = await authModel.getUser(userID);
    // if(userInfo)
    // console.log(userInfo);
    if(userInfo.length == 0){
        let data = {
            msg : "failed"
        }
        res.status(404).send("user does not exist");
    }
    else if(userInfo[0].pass == userPass && userInfo[0].user_type == "vendor"){
        req.session.shopID = userInfo[0].user_id;
        req.session.shopName = userInfo[0].first_name + " " + userInfo[0].last_name
        // console.log("gg " + userInfo[0].user_id);
        let data = {
            msg : "success",
            userInfo
        }
        res.redirect("/product-form");
    }
    else{
        let data = {
            msg : "failed",
            userInfo
        }
        res.status(200).send("invalid credentials");
    }
}


module.exports = {
    login,
    showLoginPage,
    loginPage
}

