// Static middleware in Express is used to serve static files like HTML, CSS,JavaScript, and images directly to the client using express.static() 
// without defining routes.

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));
// app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Static Middleware is working! Try accessing /hello.txt');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
