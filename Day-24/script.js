let products = [
  { name: "iPhone 15", category: "Electronics", price: 80000, stock: 10 },
  { name: "Laptop", category: "Electronics", price: 60000, stock: 5 },
  { name: "T-Shirt", category: "Clothing", price: 1200, stock: 50 },
  { name: "Sofa", category: "Furniture", price: 45000, stock: 2 },
  { name: "Dining Table", category: "Furniture", price: 30000, stock: 3 }
];

function display(list) {
  let div = document.getElementById("products");
  div.innerHTML = "";
  list.forEach(p => {
    div.innerHTML += `
      <div class="product">
        <p>Name: ${p.name}</p>
        <p>Category: ${p.category}</p>
        <p>Price: ${p.price}</p>
        <p>Stock: ${p.stock}</p>
      </div>
    `;
  });
}

function showAll() {
  display(products);
}

function showElectronics() {
  let result = products.filter(p => p.category === "Electronics");
  display(result);
}

function showTop2() {
  let result = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 2);
  display(result);
}

showAll();