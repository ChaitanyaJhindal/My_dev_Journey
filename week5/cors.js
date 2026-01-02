const express = require("express")
const app = express();
app.post("/sum",function(req,res){
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    res.json({
        answer : a+b;
    }) 

})

