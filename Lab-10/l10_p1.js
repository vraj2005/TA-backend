const express = require('express');
const app = express();
const port = 3000;


const simpleMiddleware = (req, res, next) => {
    console.log('Middleware executed!');
    console.log("Request URL:", req.url);
    next();// pass control to the next middleware or route handler
};

// // if u wnats to apply middleware to all routes then use app.use
// app.use(simpleMiddleware);

// app.use((req, res, next) => {
//     console.log("Middleware executed");
//     console.log("Request URL:", req.url);
//     next();
// });

// basic route
app.get('/',(req, res) => {
    res.send('Hello, Middleware!');
});

app.get('/about', (req, res) => {
    res.send('about page');
});

// function authMiddleware(req, res, next) {
//     if (req.query.admin === "true") {
//         next();
//     } else {
//         res.send("Access Denied");
//     }
// }

// app.get("/admin", authMiddleware, (req, res) => {
//     res.send("Welcome Admin");
// });


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
