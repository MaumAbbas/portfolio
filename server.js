const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Set EJS as templating engine
app.set("view engine", "ejs");

// Set views directory (optional if default)
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Project data
const projects = [
  {
    title: "Hotel Management System",
    tech: "HTML, CSS, JavaScript",
    description: "Web-based system for hotel room booking and management with intuitive UI and full booking workflow.",
    features: [
      "Room search and availability checking",
      "Online reservation system",
      "Room inventory and pricing management",
      "Responsive design for all devices"
    ]
  },
  {
    title: "Spotify Clone",
    tech: "HTML, CSS, JavaScript",
    description: "A pixel-perfect Spotify UI clone with functional audio player and modern styling.",
    features: [
      "Custom audio player controls",
      "Playlist management interface",
      "Play/pause functionality",
      "Modern UI with gradient effects"
    ]
  },
  {
    title: "Chef Claude Bot",
    tech: "Python, FastAPI, Hugging Face",
    description: "AI assistant for generating recipes and answering culinary questions using advanced NLP models.",
    features: [
      "Hugging Face model integration",
      "FastAPI backend architecture",
      "RESTful API endpoints",
      "Frontend-ready API design"
    ]
  }
];

// Routes
app.get("/", (req, res) => res.render("home", { title: "Home" }));
app.get("/about", (req, res) => res.render("about", { title: "About" }));
app.get("/projects", (req, res) => res.render("projects", { title: "Projects", projects }));
app.get("/contact", (req, res) => res.render("contact", { title: "Contact" }));

// 404
app.use((req, res) => {
  res.status(404).render("home", { title: "Home" }); // fallback to home
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
