const express = require("express");
const app = express();
const cors = require("cors");

let reqcount = 0;

app.use(express.json());
app.use(cors());

app.post("/sum", function (req, res) {
  reqcount++;
  console.log("The total no. of requests are", reqcount);

  const a = Number(req.body.a);
  const b = Number(req.body.b);

  res.json({
    answer: a + b
  });
});

app.listen(3001, () => {
  console.log("✅ Server running on http://localhost:3001");
});
