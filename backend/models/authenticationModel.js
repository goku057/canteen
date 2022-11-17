let { query } = require("../helpers/db.js");

let registerUser = async (userName, email, pass) => {
    
}

let checUserExists = async (userName) => {
    
    let sqlCommand = `SELECT  COUNT(user_name) AS c FROM user_info WHERE user_name = "${userName}";`
    let result = await query(sqlCommand);
    return result;
} 

let getUser = async (userName) => {
    let sqlCommand = `SELECT  user_id, user_name, pass, first_name, last_name, user_type, image_link FROM user_info WHERE user_name = "${userName}";`
    let result = await query(sqlCommand);
    return result;
} 

module.exports = {
    registerUser,
    checUserExists,
    getUser
}