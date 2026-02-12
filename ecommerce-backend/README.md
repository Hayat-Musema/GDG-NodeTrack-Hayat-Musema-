# Ecommerce Backend API

## Project Description

This is a RESTful ecommerce backend API built using:
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose

The system supports product management, cart functionality, and order processing with proper stock validation.
**Authentication is intentionally excluded** as per project requirements.

---

## Project Folder Structure

ecommerce-backend/\
├── controllers/ # Handles business logic\
│ ├── productController.js\
│ ├── cartController.js\
│ └── orderController.js\
├── models/ # Mongoose schemas\
│ ├── Product.js\
│ ├── Cart.js\
│ └── Order.js\
├── routes/ # API endpoints\
│ ├── productRoutes.js\
│ ├── cartRoutes.js\
│ └── orderRoutes.js\
├── config/ # Database connection\
│ └── db.js\
├── app.js # Express app setup\
├── server.js # Server start\
├── package.json # Project dependencies and scripts\
├── package-lock.json\
└── .env # Environment variables (MONGO_URI, PORT)

### Get single product


- Update product
- Delete product

### Cart
- Add product to cart
- Update cart quantity
- Remove product from cart
- Get current cart
- Validate stock before adding

### Orders
- Create order from cart
- Double stock validation
- Deduct product stock
- Calculate total price
- Clear cart after order
- View all orders

---

## API Endpoints

### Products

| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| POST   | /api/products         | Create a new product         |
| GET    | /api/products         | Get all products             |
| GET    | /api/products/:id     | Get single product by ID     |
| PUT    | /api/products/:id     | Update product by ID         |
| DELETE | /api/products/:id     | Delete product by ID         |

### Cart

| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| GET    | /api/cart              | Get current cart                     |
| POST   | /api/cart              | Add product to cart                  |
| PUT    | /api/cart              | Update product quantity in cart      |
| DELETE | /api/cart/:productId   | Remove product from cart             |

### Orders

| Method | Endpoint       | Description            |
|--------|----------------|------------------------|
| POST   | /api/orders    | Create order from cart |
| GET    | /api/orders    | Get all orders         |

---

## Business Logic

- Products cannot be added to cart if stock is insufficient
- Orders cannot be created if cart is empty
- Stock is deducted when an order is placed
- Cart is cleared automatically after a successful order
- Proper HTTP status codes are used for errors and success
- MVC pattern is followed for clean structure

---

## Setup Instructions

1. **Clone repository**

```
git clone <https://github.com/Hayat-Musema/GDG-NodeTrack-Hayat-Musema-/tree/main/ecommerce-backend>
```
2.**Install Dependencies**
```
npm install
```
3.**Create .env file**
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
4.**Run server**
```
npm run dev
```
5. **Test API using Postman**

```
Use the collection ecommerce-backend API
Test Products, Cart, Orders endpoints
```

---
**Notes**

-Postman collection (`docs/Ecommerce-backend-API.postman_collection.json`) has all endpoints organized into folders:
-Products
-Cart
-Orders

-Authentication is **intentionally** excluded
-Focus is on CRUD, cart & order logic, and proper MongoDB integration

---

Author
Hayat Musema
