const { Router } = require("express");
const UserRouter = Router();

UserRouter.post("/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    });
});

UserRouter.get("/login", function(req, res) {
    res.json({
        message: "login endpoint"
    });
});

module.exports = {
    UserRouter
};
