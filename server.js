const express = require("express");
const app = express();
const products = require("./products");
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// --- 1) GET /products (all products) ---
app.get("/products", (req, res) => {
  res.json(products);
});

// --- 2) GET /products/categories (unique categories) ---
app.get("/products/categories", (req, res) => {
  const categories = [...new Set(products.map(item => item.category))];
  res.json({ categories });   // ✅ Correct (object with key)
});


// --- 3) GET /products/instock (only in-stock items) ---
app.get("/products/instock", (req, res) => {
  const instockItems = products.filter(item => item.instock === true);
  res.json(instockItems);
});

// Start server on port 3000
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
