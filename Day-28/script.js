async function loadProducts() {
    const response = await fetch("/products");
    const products = await response.json();

    const list = document.getElementById("productList");
    list.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        const li = document.createElement("li");

        li.textContent =
            "Name: " + products[i].name +
            " | Price: " + products[i].price +
            " | Stock: " + products[i].stock;

        list.appendChild(li);
    }
}