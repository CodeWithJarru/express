const express = require("express");
const path = require("path");
const app = express();
const posts = require("./data/blogs.js"); // Import the blog posts data

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Correct path for views

// Serve static files (optional)
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
  res.render("index", { posts }); // Render index.ejs, not app.ejs
});
app.get("/about", (req, res) => {
  res.render("about", { posts }); // Render index.ejs, not app.ejs
});
app.get("/contact", (req, res) => {
  res.render("contact", { posts }); // Render index.ejs, not app.ejs
});

// Blog Post Route
// Blog Post Route
app.get("/blog/:slug", (req, res) => {
  const post = posts.find(p => p.slug === req.params.slug); // Finding the specific post based on the slug
  if (post) {
    res.render("blogpost", { post, posts }); // Pass both post and posts to the view
  } else {
    res.status(404).send("Post not found");
  }
});


// Start the server
const port = process.env.PORT || 3000;  // Use dynamic port for Railway
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
