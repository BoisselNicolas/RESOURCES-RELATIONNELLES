module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();

    router.post("/", function(){
        res.send("Hello World");
    });
    
    // Create a new User
    router.post("/new", users.create);

    // Retrieve all users
    router.get("/all", users.findAll);

    app.use('/api/user', router);
};