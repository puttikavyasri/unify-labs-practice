function loadProducts() {

    fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(data => {
            let output = "";
            
            for (let i = 0; i < data.length; i++) {
                output += `
                    <div class="product">
                        <p>Name: ${data[i].name}</p>
                        <p>Price: ${data[i].price}</p>
                        <p>Stock: ${data[i].stock}</p>
                    </div>
                `;
            }

            document.getElementById("productList").innerHTML = output;
        })
        .catch(error => {
            console.log("Error fetching products");
            console.log(error);
        });
}