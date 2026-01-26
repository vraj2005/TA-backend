const express = require("express");
const mongoose = require("mongoose");
const facultyRoutes = require("./facultyroutes");

const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/facultyDB")
// "mongodb://localhost:27017"
// atlas link = mongodb+srv://Vraj0282:<db_password>@ecommerapp.i7qt1.mongodb.net/facultyDB?appName=ecommerApp

.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/faculty", facultyRoutes);

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
