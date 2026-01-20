const express = require('express')
const app = express()
const port = 3000

app.post("/user/signup", (req, res) => {
  res.json({
    message: "Signup endpoint"
  })
})

app.get("/user/signin", (req, res) => {
  res.json({
    message: "Signin endpoint"
  })
})


app.get("/courses", (req, res) => {
  res.json({
    message: "courses endpoint"
  })
})

app.get("/user/purchases", (req, res) => {
  res.json({
    message: "purchases endpoint"
  })
})

app.post("/course/purchases", (req, res) => {
  res.json({
    message: " course purchases endpoint"
  })
})








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
