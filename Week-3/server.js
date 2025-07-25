const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const url = require('url');

// Helper to send response
function sendResponse(res, status, content) {
    res.writeHead(status, { 'Content-Type': 'text/plain' });
    res.end(content);
}

const server = http.createServer(async (req, res) => {
    try {
        const parsedUrl = url.parse(req.url, true);
        const { pathname, query } = parsedUrl;

        // Validate filename query param
        const filename = query.filename;
        const content = query.content || '';
        const filesDir = path.join(__dirname, 'files');

        // Ensure /files directory exists
        await fs.mkdir(filesDir, { recursive: true });

        const filePath = path.join(filesDir, filename || '');

        // /create route
        if (pathname === '/create' && req.method === 'GET') {
            if (!filename || !content) {
                sendResponse(res, 400, 'Missing filename or content');
                return;
            }

            await fs.writeFile(filePath, content);
            sendResponse(res, 200, `File '${filename}' created`);
            return;
        }

        // /read route
        if (pathname === '/read' && req.method === 'GET') {
            if (!filename) {
                sendResponse(res, 400, 'Missing filename');
                return;
            }

            const data = await fs.readFile(filePath, 'utf8');
            sendResponse(res, 200, data);
            return;
        }

        // /delete route
        if (pathname === '/delete' && req.method === 'GET') {
            if (!filename) {
                sendResponse(res, 400, 'Missing filename');
                return;
            }

            await fs.unlink(filePath);
            sendResponse(res, 200, `File '${filename}' deleted`);
            return;
        }

        // Invalid route
        sendResponse(res, 404, `Route '${pathname}' not found. Use /create, /read, or /delete.`);
    } catch (err) {
        if (err.code === 'ENOENT') {
            sendResponse(res, 404, 'File not found');
        } else {
            sendResponse(res, 500, `Server error: ${err.message}`);
        }
    }
});

const PORT = 7000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
