const express = require('express')
const app = express()
app.use(express.json());


const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("Being contacted");
})

app.post('/login', (req, res) => {
  console.log("Trying to login");
  console.log(req.body);


  // res.send('I see you\'re trying to login!')

    let username = req.body.username;
    let password = req.body.password;

    if(username == "a") {
      res.status(200);
      res.send("Success!");
    }
    else {
      res.status(400);
      res.send("Failed");
    }
    // console.log(username);
    // console.log(password);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})