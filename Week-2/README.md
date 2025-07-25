# File Management Tool (Node.js Core Modules)

This is a simple **File Management Tool** built using **Node.js core modules**:  
- `fs` (File System)  
- `path`  
- `http`  

It supports basic file operations via HTTP routes:  
 - Create a file  
 - Read a file  
 - Delete a file  

---

## Features

- Create text files with custom content
- Read and view file contents in the browser
- Delete existing files
- Uses only Node.js built-in modules

---

## Create a file

```bash
 http://localhost:7000/create?filename=example.txt&content=HelloWorld

```

##  Read a file

```bash
 http://localhost:7000/read?filename=example.txt

```

## Delete a file

```bash
 http://localhost:7000/delete?filename=example.txt
 
```

