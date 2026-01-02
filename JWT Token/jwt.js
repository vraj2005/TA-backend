const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "vraj" && password === "123") {
        const token = jwt.sign(
            { username: username },
            SECRET_KEY,
            { expiresIn: "1h" }
        );
        res.json({
            message: "Login successful",
            token: token
        });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// Middleware to verify token
function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(403).json({ message: "Token required" });
    }
    const token = authHeader.split(" ")[1]; // Bearer TOKEN
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.user = decoded; // store decoded data
        next();
    });
}

app.get("/dashboard", verifyToken, (req, res) => {
    res.json({
        message: "Welcome to dashboard",
        user: req.user
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
