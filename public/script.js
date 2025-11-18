document.getElementById("loadProductsBtn").addEventListener("click", loadProducts);

function loadProducts() {
    fetch("/products")
        .then(response => response.json())
        .then(data => displayProducts(data))
        .catch(error => console.error("Error fetching products:", error));
}

function displayProducts(products) {
    const output = document.getElementById("output");
    output.innerHTML = ""; // clear previous content

    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product-card");

        div.innerHTML = `
            <strong>${product.name}</strong><br>
            Category: ${product.category} <br>
            Price: ₹${product.price || "N/A"} <br>
            In Stock: ${product.instock ? "Yes" : "No"}
        `;

        output.appendChild(div);
    });
}
