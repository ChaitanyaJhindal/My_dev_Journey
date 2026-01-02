const express = require("express");
const app = express();
let reqcount =0;

function requestincreaser(){
        reqcount=reqcount+1;
    console.log("The total no. of requests are " + reqcount);

}
function Realsumhandler(){
 const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        answer: a + b
    });
    next();
}
app.get("/sum", requestincreaser ,  Realsumhandler)
//requestincreaser();//useof mmiddleware can be seen here as somethijng is being processed before the actual logic and here we can introduce thhis process in different  function which can be knowon as middleware
   
;
app.get("/mul", function (req, res) {
    requestincreaser();
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        answer: a * b
    });
});

app.listen(3000);
