# 📂 Express.js Web Server

A modular Node.js server built with **Express.js** following the **MVC architecture**. Handles multiple routes with a clean folder structure and supports environment configuration using `.env`.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- dotenv
- nodemon

---

## ✅ Features

- Built with **Express.js** and **Node.js**
- Clean **MVC folder structure**
- Supports **4 endpoints**: `/`, `/about`, `/users`, `/service`
- Uses `dotenv` for configuration
- Modular routing using Express Router
- Easy to expand with views, DB, and auth

---

## 🚀 Endpoints

- `GET /` → Home Page
- `GET /about` → About Page
- `GET /users` → User Profile
- `GET /service` → Service Page

---

## 🌐 Example URLs

- Test endpoints in the browser or using tools like Postman:

  `http://localhost:3000/`
  `http://localhost:3000/about`
  `http://localhost:3000/users`
  `http://localhost:3000/service`

---

## 🧠 Highlights

- Follows **Model-View-Controller (MVC)** pattern
- Uses `express.Router` to separate route logic
- Scalable and readable file structure
- Built with `async/await` support in mind
- Middleware ready for parsing JSON, logging, etc.

---

## 💡 How to Run

```bash
# For production
npm start

# For development with auto-reload
npm run dev

```

---

## 📁 Directory Structure

```bash
.
├── controllers/         # Functions that handle logic for each route
│   ├── homeController.js
│   ├── aboutController.js
│   ├── userController.js
│   └── serviceController.js
│
├── routes/              # Route definitions using express.Router()
│   ├── homeRoutes.js
│   ├── aboutRoutes.js
│   ├── userRoutes.js
│   └── serviceRoutes.js
│
├── .env                 # Environment variable for PORT
├── .gitignore           # Node_modules and .env ignored
├── app.js               # Entry point of the application
├── package.json         # Project metadata and scripts
├── package-lock.json    # Lock file for dependencies
└── README.md            # Project documentation

```
