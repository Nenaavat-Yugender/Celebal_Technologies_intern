# 📂 Node.js File Manager Server

A simple HTTP server built with Node.js that allows users to **create**, **read**, and **delete** text files through URL query parameters. This project uses `async/await` and `fs.promises` for modern, clean asynchronous operations.

---

## ✅ Features
- Built using core Node.js (`http`, `fs.promises`, `url`, `path`)
- Uses modern `async/await` pattern for better readability
- Handles all routes with proper error checks and HTTP status codes
- Automatically creates `files` folder if not present

## 🚀 Endpoints
- `/create?filename=test.txt&content=Hello` → creates a file
- `/read?filename=test.txt` → reads file content
- `/delete?filename=test.txt` → deletes the file

## 🧠 Key Highlights
- Refactored legacy callback-based code to Promises + `async/await`
- Follows best practices in error handling and folder structure
- Easy to extend with routes like `/list` or `/rename`

## 💡 How to Run
```bash
npm start

---

## Directory Structure
.
├── files/           # Auto-created directory to store text files
├── server.js        # Main server code
└── README.md

---

##  Tech Stack

- [Node.js](https://nodejs.org/)
- Native core modules: `http`, `fs`, `url`, `path`

---

## Create a file

```bash
http://localhost:7000/create?filename=test.txt&content=HelloWorld

```

##  Read a file

```bash
 http://localhost:7000/read?filename=test.txt

```

## Delete a file

```bash
http://localhost:7000/delete?filename=test.txt
 
```

