const express = require('express');
const app = express();

app.use(express.json()); //middleware to parse JSON body
app.get('/', (req, res) => {
  res.send('Hello in the world of programming!');
})

app.post('/login', (req, res) => {
  //res.send('Login Successful');
  //const user = {name: 'admin', password: 'admin123'};
  // console.log(user);
  // res.json(user);

  //using req.body (need to install body-parser middleware)
  const {name,email} =req.body;
  console.log(name,email);  
  res.json(`Welcome ${name}, your email is ${email}`);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`User ID is: ${req.params.id}`);
});
const port = 3030;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});