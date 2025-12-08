const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello in the world of programming!');
})
const port = 3030;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});