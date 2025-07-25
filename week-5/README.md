# 📂 MongoDB CRUD App (Express.js + MVC)

A modular and scalable **Node.js** application built with **Express.js** and **MongoDB**, using **Mongoose** for object modeling. Follows the **MVC architecture** and includes cleanly separated route, controller, and model layers.

---

##  Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **dotenv**

---

##  Features

-  Full CRUD functionality (Create, Read, Update, Delete)
-  MVC architecture for scalable structure
-  Uses `.env` for environment config
-  Modular routing with Express Router
-  Easy to integrate with frontend or deploy to cloud

---

##  API Endpoints

| Method | Route              | Description       |
|--------|--------------------|-------------------|
| POST   | `/api/users`       | Create a new user |
| GET    | `/api/users`       | Get all users     |
| PUT    | `/api/users/:id`   | Update user by ID |
| DELETE | `/api/users/:id`   | Delete user by ID |

---

##  API Testing

   **All API endpoints are fully working and successfully tested using [Postman](https://www.postman.com/)**.

Each request has been verified with correct responses, validation, and error handling. You can use Postman to:
- Send POST/GET/PUT/DELETE requests
- View response bodies and status codes
- Test with real-time user data

---


## Highlights

- RESTful API design
- Easy to expand with authentication, frontend, etc.
- Highly modular and maintainable
- Works on local MongoDB or MongoDB Atlas

---

```bash
.
├── controllers/         # Business logic for each route
│   └── userController.js
├── models/              # Mongoose schema and model
│   └── userModel.js
├── routes/              # Route definitions using Express Router
│   └── userRoutes.js
├── config/              # MongoDB connection file
│   └── db.js
├── .env                 # Environment variables
├── .gitignore           # Ignored files/folders
├── README.md            # Project documentation
├── package.json         # Project metadata
└── server.js            # Main entry point


```

