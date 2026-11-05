# Inventory Management System

A simple and interactive **Inventory Management System** built using React.js and Redux. This project demonstrates the fundamentals of state management in React, including adding, displaying, searching, editing, and deleting inventory products.

## 📌 Project Overview

The Inventory Management System allows users to manage product records through a simple user interface. Users can add products with details such as name, price, quantity, and category, and manage existing products using the available actions.

The main objective of this project is to understand how Redux manages application state and how React components interact with a centralized store.

## ✨ Features

- **Add Products:** Add new inventory items with product name, price, quantity, and category.
- **Display Products:** View all available inventory products in a structured table.
- **Search Products:** Search for products using the search functionality.
- **Edit Products:** Update the details of existing inventory items.
- **Delete Products:** Remove products from the inventory.
- **Category Selection:** Assign categories to products.
- **Redux State Management:** Manage inventory data through a centralized Redux store.
- **Dynamic UI Updates:** Automatically update the product list when inventory data changes.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Redux | Centralized state management |
| JavaScript | Application logic |
| HTML5 | Page structure |
| CSS3 | Basic styling |
| npm | Package management |

## 📂 Project Functionality

### 1. Add Product
Users can enter the following product information:
- Product Name
- Product Price
- Product Quantity
- Product Category

After entering the details, clicking the **Add** button adds the product to the inventory.

### 2. Product Listing
All inventory products are displayed in a table containing:

| Field | Description |
|---|---|
| NO | Product serial number |
| Name | Product name |
| Price | Product price |
| Qty | Available quantity |
| Category | Product category |
| Actions | Edit and Delete options |

### 3. Search Product
Users can search for products using the search input field to find specific inventory items.

### 4. Edit Product
The Edit action allows users to modify the details of an existing product.

### 5. Delete Product
The Delete action removes the selected product from the inventory list.

## ⚙️ Redux State Management

Redux is used to maintain and manage the inventory data centrally.

The application follows the Redux state management approach:

1. **Store:** Holds the application inventory state.
2. **Actions:** Define operations such as adding, editing, deleting, and searching products.
3. **Reducers:** Handle actions and return updated state.
4. **Dispatch:** Sends actions to the Redux store.
5. **Components:** Access and update application state through Redux.

This approach helps maintain predictable and organized application state.



## 🎯 Learning Objectives

Through this practical project, I gained hands-on experience with:

- Building reusable React components.
- Understanding Redux architecture.
- Managing centralized application state.
- Using actions and reducers.
- Connecting React components with Redux.
- Implementing CRUD (Create, Read, Update, Delete) operations.
- Handling user input and form data.
- Implementing basic product search functionality.
- Updating UI dynamically based on state changes.

## 📸 Project Preview

The application provides a simple inventory dashboard with a product input form, search functionality, and a product listing table with Edit and Delete actions.

## 👨‍💻 Author

**Dharmik**

