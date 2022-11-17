//setting up express 
const express = require("express");
const app = express();
const session = require('express-session')
const cors = require('cors')

app.set("view engine", "ejs");

//setting middlewares
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))


//setting up the routes
const authRoutes = require("./routes/authRoutes.js");
const basicRoutes = require("./routes/basicRoutes.js");


//using the routes
app.use(authRoutes);
app.use(basicRoutes);








app.listen("5000", () => {
    console.log("The server is up and its on: localhost:5000 ");
});


app.get("/test", (req, res) => {
    // if (req.session.views) {
    //     req.session.views++
    //     res.setHeader('Content-Type', 'text/html')
    //     res.write('<p>views: ' + req.session.views + '</p>')
    //     res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    //     res.end()
    //     return;
    //   } else {
    //     req.session.views = 1
    //     res.end('welcome to the session demo. refresh!')
    //     return;
    //   }
    res.render("upload-food");
});