const express = require("express");
const { UserRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");

const app = express();
app.use(express.json());

app.use("/user", UserRouter);
app.use("/course", courseRouter);

app.listen(3000);
