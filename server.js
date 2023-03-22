const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("Being contacted");
})

app.post('/login', (req, res) => {
  console.log("Trying to login");
  console.log(req.body);
    // let username = req.body.username;
    // let password = req.body.password;
    // console.log(username);
    // console.log(password);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})