# 📦 MERN CRUD API – Product & User Management

A clean and scalable **RESTful API** built with **Node.js**, **Express.js**, and **MongoDB**, following **MVC architecture**. It supports full **CRUD operations** for both `Products` and `Users` collections, and comes with preloaded **dummy data** for easy testing.

---

## ⚙️ Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Routing and server
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **dotenv** – Env variable support
- **Postman** – API testing

---

## Folder Structure

```bash
.
├── server.js                  # Main app entry point
├── config/
│   └── db.js                  # MongoDB connection logic
├── models/
│   ├── productModel.js        # Product schema
│   └── userModel.js           # User schema
├── controllers/
│   ├── productController.js   # Logic for products
│   └── userController.js      # Logic for users
├── routes/
│   ├── productRoutes.js       # Product endpoints
│   └── userRoutes.js          # User endpoints
├── data/
│   └── sampleProducts.json    # Dummy data for testing
├── .env                       # Environment variables
├── .gitignore                 # Ignored files/folders
└── README.md                  # Project documentation

```

---

## 💾 Dummy Product Data Included

A file named `sampleProducts.json` inside the `/data/` folder contains **10 sample mobile products** with:

- Realistic names (iPhone 14, Galaxy S22, etc.)
- Prices, categories, stock, brand, and rating
- Stable Unsplash image URLs

Use it to:

- Easily test GET requests
- Preload your DB with sample data
- Save time when demoing or deploying

---

## NPM Scripts

```bash
npm start # Run server in production
npm run dev # Run in development using nodemon

```

---

## 🚀 Features

- ✅ Full CRUD operations
- ✅ Modular MVC structure
- ✅ RESTful API design
- ✅ Dummy product data included for easy testing
- ✅ Clean and scalable folder structure
- ✅ Uses `.env` for configuration

---

## 🧪 API Testing

✅ All APIs have been tested using **Postman**  
✅ Responses verified with proper HTTP status codes  
✅ Dummy `sampleProducts.json` file included under `/data`

---

## 📌 REST API Endpoints

### Products

| Method | Route               | Description              |
| ------ | ------------------- | ------------------------ |
| POST   | `/api/products`     | Create a new product     |
| GET    | `/api/products`     | Get all products         |
| GET    | `/api/products/:id` | Get product by ID        |
| PUT    | `/api/products/:id` | Update product by ID     |
| PUT    | `/api/products`     | Bulk update all products |
| DELETE | `/api/products/:id` | Delete product by ID     |
| DELETE | `/api/products`     | Delete all products      |

### Users

| Method | Route            | Description           |
| ------ | ---------------- | --------------------- |
| POST   | `/api/users`     | Create a new user     |
| GET    | `/api/users`     | Get all users         |
| GET    | `/api/users/:id` | Get user by ID        |
| PUT    | `/api/users/:id` | Update user by ID     |
| PUT    | `/api/users`     | Bulk update all users |
| DELETE | `/api/users/:id` | Delete user by ID     |
| DELETE | `/api/users`     | Delete all users      |

---

## Author

Built with ❤️ by NENAAVATH YUGENDER as part of the internship @Celebal Technologies.
This project plays a key role in PPO consideration.

---
