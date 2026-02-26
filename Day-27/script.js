const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/productDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number
});

const Product = mongoose.model("Product", productSchema);

/* POST - Add Product */
app.post("/products", async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: "Error adding product" });
    }
});

/* PATCH - Update Stock */
app.patch("/products/:id", async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            { stock: req.body.stock },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: "Error updating stock" });
    }
});

/* DELETE - Remove Product */
app.delete("/products/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting product" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});