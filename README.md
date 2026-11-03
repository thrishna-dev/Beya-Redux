# Beya-Redux
# Beya – E-Commerce Website

Beya is a responsive e-commerce website built using React.js and Redux Toolkit. It allows users to browse products, filter products by category, view product details, and manage their shopping cart.

This project was developed as part of my Full Stack Development training at Upcode Software Labs.

## Features

* **Home Page:** Displays the website homepage with banners and featured sections.
* **Product Listing:** Fetches and displays products from the Fake Store API.
* **Category Filtering:** Filter products based on different categories.
* **Product Details:** View individual product information, including images, descriptions, prices, and ratings.
* **Shopping Cart:** Add products, update quantities, and manage cart items.
* **Login Page:** Provides a login interface and manages login state using Redux.
* **API Integration:** Fetches product data using Redux Toolkit's `createAsyncThunk`.

## Technologies Used

* React.js
* Redux Toolkit
* React Redux
* JavaScript
* HTML5
* CSS3
* Bootstrap
* Fake Store API

## State Management

This project uses:

* **Redux Toolkit:** Manages product data, category selection, and login state.
* **Redux Thunk (`createAsyncThunk`):** Handles asynchronous API requests for fetching all products and individual product details.
* **Context API:** Manages shopping cart functionality.

## API

Product information is fetched from the Fake Store API.

API: https://fakestoreapi.com/products

## Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

git clone https://github.com/thrishna-dev/Beya-Redux.git


### 2. Navigate to the project folder

cd Beya-Redux

### 3. Install dependencies

npm install

### 4. Start the development server

npm start

The application will run at:

http://localhost:3000

## Project Structure

src/
├── App/
│   └── store.js
├── components/
│   ├── About.jsx
│   ├── Cart.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   ├── Product.jsx
│   ├── ProductList.js
│   └── Products.jsx
├── features/
│   ├── auth/
│   │   └── authSlice.js
│   └── product/
│       └── productsSlice.js
├── styles/
│   └── ProductList.css
├── CartContext.jsx
├── App.js
├── App.css
├── index.js
└── index.css


## Learning Outcomes

Through this project, I gained practical experience in:

* Building reusable React components.
* Managing application state using Redux Toolkit.
* Handling asynchronous API requests using Redux Thunk.
* Implementing product filtering and navigation.
* Integrating Context API with Redux.
* Building a responsive e-commerce interface.

## Developed By

**Thrishna S.**

React + Python Learner

GitHub: https://github.com/thrishna-dev
