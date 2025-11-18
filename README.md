# Product Catalog API

## 1. Project Description
This project is a simple *Product Display API* built using *Node.js* and *Express.js*.  
It provides product data through API endpoints and a frontend page to display products.

*Technologies Used:*
- Node.js
- Express.js
- HTML, CSS, JavaScript (frontend)

---

## 2. Project Structure
product-catalog-api/
├─ public/
│ └─ index.html # Frontend page to display products
├─ server.js # Main server file with API endpoints
├─ package.json # Project dependencies
├─ .gitignore # Files/folders to ignore in Git
└─ README.md # Project documentation

---

## 3. API Documentation

### *GET /products*
- *Description:* Returns a list of all products
- *Response Format:* JSON array
- *Sample Response:*
```json
[
    {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "price": 45000,
        "inStock": true
    },
]


GET /products/categories
Description: Returns a list of unique product categories

Response Format: JSON object

Sample Response:
{
    "categories": [
        "Electronics",
        "Accessories",
        "Furniture"
    ]
}



GET /products/instock
Description: Returns only products that are currently in stock

Response Format: JSON array

Sample Response:
    {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "price": 45000,
        "inStock": true
    },


4. Installation & Setup Instructions
Clone the repository:

bash
git clone https://github.com/FathimaHibaa/product-catalog-api
cd product-catalog-api

Install dependencies:

bash
npm install
Run the server:

bash
node server.js

Access the frontend page:

http://localhost:3000

Access API endpoints:

All products: http://localhost:3000/products

Categories: http://localhost:3000/products/categories

In-stock products: http://localhost:3000/products/instock

5. GitHub Repository Link
https://github.com/FathimaHibaa/product-catalog-api.git

6. Author Information

Fathima Hiba