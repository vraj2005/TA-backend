const express = require('express');
const app = express();
const port = 3000;

const simpleMiddleware = (req, res, next) => {
    console.log('Middleware executed!');
    next();// pass control to the next middleware or route handler
};

// if u wnats to apply middleware to all routes then use app.use
// app.use(simpleMiddleware);

//basic route
app.get('/', simpleMiddleware,(req, res) => {-
    res.send('Hello, Middleware!');
});

app.get('/about', (req, res) => {
    res.send('about, Middleware!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
