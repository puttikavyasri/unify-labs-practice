const api = "/api/products";
let productsData = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function loadProducts() {
    const category = document.getElementById("categoryFilter").value;
    let url = api;
    if (category) {
        url += "?category=" + category;
    }

    const res = await fetch(url);
    productsData = await res.json();
    displayProducts(productsData);
}

function displayProducts(products) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>₹${product.price}</p>
            <button onclick="addToCart('${product._id}','${product.name}',${product.price})">Add to Cart</button>
        `;
        container.appendChild(div);
    });
}

function filterProducts() {
    const text = document.getElementById("search").value.toLowerCase();
    const filtered = productsData.filter(p =>
        p.name.toLowerCase().includes(text)
    );
    displayProducts(filtered);
}

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

function showCart() {
    const list = document.getElementById("cartList");
    list.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        list.appendChild(li);
        total += item.price;
    });

    document.getElementById("total").textContent = "Total: ₹" + total;
}

async function checkout() {
    const name = document.getElementById("custName").value;
    const email = document.getElementById("custEmail").value;
    const address = document.getElementById("custAddress").value;

    await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, address, items: cart })
    });

    cart = [];
    localStorage.removeItem("cart");
    showCart();
    alert("Order Placed Successfully");
}

loadProducts();
showCart();