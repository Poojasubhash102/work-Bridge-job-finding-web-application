const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });

// Sample job listings data
let jobs = [
    {
        id: 1,
        title: "Web Developer (Full Time)",
        company: "Google",
        salary: "₹80,000 - ₹85,000",
        type: "Full Time",
        location: "Bangalore",
        image: "/images/google.png",
        description: "Develop and maintain web applications.",
        skills: "HTML, CSS, JavaScript",
    },
    {
        id: 2,
        title: "Freelancer Web Developer",
        company: "Microsoft",
        salary: "₹85,000 - ₹90,000",
        type: "Freelancer",
        location: "Remote",
        image: "/images/microsoft.png",
        description: "Design and implement web solutions.",
        skills: "React, Node.js",
    },
    // Add more jobs as needed
];

// API endpoints
app.get("/api/jobs", (req, res) => {
    res.json(jobs);
});

app.get("/api/jobs/:id", (req, res) => {
    const job = jobs.find((job) => job.id === parseInt(req.params.id));
    if (job) {
        res.json(job);
    } else {
        res.status(404).json({ error: "Job not found" });
    }
});

app.post("/api/apply", upload.single("resume"), (req, res) => {
    const { name, email, phone, dob, address, coverLetter } = req.body;
    const resumePath = req.file ? req.file.path : null;

    if (!name || !email || !phone || !resumePath) {
        return res.status(400).json({ error: "Missing required fields." });
    }

    console.log("Application received:", {
        name,
        email,
        phone,
        dob,
        address,
        coverLetter,
        resume: resumePath,
    });

    res.json({ message: "Application submitted successfully!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
