// 1. Import necessary modules
const express = require("express");
const path = require("path");

// 2. Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// 4. Default route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Node.js App on Azure</h1>");
});

// 5. Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
