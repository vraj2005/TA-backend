const express = require("express");
const Faculty = require("./faculty");
const app = express();
// const router = express.Router();

// CREATE Faculty
app.post("/", async (req, res) => {
    try {
        const faculty = new Faculty(req.body);
        const savedFaculty = await faculty.save();
        res.status(201).json(savedFaculty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// READ All Faculty
app.get("/", async (req, res) => {  
    try {
        const { n, page = 1, limit = 5 } = req.query;
        let filter = {};
        if (n) {
            filter.name = { $regex: n, $options: "i" };
        }
        const skip = (page - 1) * limit;
        const data = await Faculty.find(filter)
            .skip(skip)
            .limit(parseInt(limit));
        const total = await Faculty.countDocuments(filter);
        res.json({
            totalRecords: total,
            page: Number(page),
            limit: Number(limit),
            data
        });
    } catch (error) { 
        res.status(500).json({ error: error.message });
    }
});

// READ Faculty by ID
app.get("/:id", async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);
        if (!faculty) return res.status(404).json({ message: "Faculty not found" });
        res.json(faculty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// UPDATE Faculty
app.put("/:id", async (req, res) => {
    try {
        const updatedFaculty = await Faculty.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedFaculty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE Faculty
app.delete("/:id", async (req, res) => {
    try {
        await Faculty.findByIdAndDelete(req.params.id);
        res.json({ message: "Faculty deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = app;