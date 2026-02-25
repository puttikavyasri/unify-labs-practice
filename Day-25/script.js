let products = [
    { name: "Mobile", category: "Electronics", price: 600, stock: 5, tags: [] },
    { name: "Shirt", category: "Clothing", price: 300, stock: 0, tags: [] },
    { name: "Laptop", category: "Electronics", price: 900, stock: 2, tags: [] }
];

function showProducts() {
    let list = document.getElementById("product-list");
    list.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        let p = products[i];
        list.innerHTML += `
            <div class="product">
                Name: ${p.name}<br>
                Category: ${p.category}<br>
                Price: ${p.price}<br>
                Stock: ${p.stock}<br>
                Tags: ${p.tags.join(", ")}
            </div>
        `;
    }
}

function increaseStock() {
    for (let i = 0; i < products.length; i++) {
        products[i].stock += 1;
    }
    showProducts();
}

function addTag() {
    for (let i = 0; i < products.length; i++) {
        if (products[i].category === "Electronics") {
            products[i].tags.push("new-arrival");
        }
    }
    showProducts();
}

function deleteZeroStock() {
    products = products.filter(p => p.stock !== 0);
    showProducts();
}

showProducts();