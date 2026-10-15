const http = require('http');

// 1. Core GoAnimate routing lookup map array
const functions = {
    find: (req, res, parsedUrl) => {
        // Future video maker/character generator pathways go here
        return false; 
    }
};

// 2. Launch the HTTP Server infrastructure pipeline
module.exports = http.createServer((req, res) => {
    try {
        const parsedUrl = { pathname: req.url.split('?') };
        const found = functions.find(req, res, parsedUrl);
        
        if (!found) { 
            // Serve a standard homepage state if someone lands on your root address
            if (req.url === '/' || req.url === '/index.html') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>GoAnimate Home</h1><p>Welcome to your server root.</p>');
                return;
            }
            // If the route doesn't exist, intentionally trip the error handler loop
            throw new Error("Route asset path breakdown");
        }
    } catch (err) {
        // 3. System Exception Interceptor
        console.error(err.stack); // Keeps technical stack traces visible in your Render console logs
        
        // Force the browser to render the authentic full-screen Heroku CDN application error page
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="utf-8"><title>Application Error</title><style media="screen">html,body,iframe { margin: 0; padding: 0; } html,body { height: 100%; overflow: hidden; } iframe { width: 100%; height: 100%; border: 0; }</style></head><body><iframe src="https://herokucdn.com"></iframe></body></html>`);
    }
}).listen(process.env.PORT || 3000);
