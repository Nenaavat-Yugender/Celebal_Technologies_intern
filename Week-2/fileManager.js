const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Helper to send response
function sendResponse(res, status, content) {
    res.writeHead(status, { 'Content-Type': 'text/plain' });
    res.end(content);
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;
    const filePath = path.join(__dirname, 'files', query.filename || '');

    // Ensure /files directory exists
    if (!fs.existsSync(path.join(__dirname, 'files'))) {
        fs.mkdirSync(path.join(__dirname, 'files'));
    }

    // Create a file
    if (pathname === '/create' && req.method === 'GET') {
        if (!query.filename || !query.content) {
            return sendResponse(res, 400, 'Missing filename or content');
        }

        fs.writeFile(filePath, query.content, (err) => {
            if (err) return sendResponse(res, 500, 'Error creating file');
            sendResponse(res, 200, `File '${query.filename}' created`);
        });
    }

    // Read a file
    else if (pathname === '/read' && req.method === 'GET') {
        if (!query.filename) return sendResponse(res, 400, 'Missing filename');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) return sendResponse(res, 404, 'File not found');
            sendResponse(res, 200, data);
        });
    }

    // Delete a file
    else if (pathname === '/delete' && req.method === 'GET') {
        if (!query.filename) return sendResponse(res, 400, 'Missing filename');

        fs.unlink(filePath, (err) => {
            if (err) return sendResponse(res, 404, 'File not found or error deleting');
            sendResponse(res, 200, `File '${query.filename}' deleted`);
        });
    }

    // Invalid route
    else {
        sendResponse(
            res,
            404,
            `Oops! route '${pathname}' not found. \nTry /create, /read, or /delete.`
        );
    }

});

const PORT = 7000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
