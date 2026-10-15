const http = require('http');

// 1. Core GoAnimate routing lookup map array
const functions = {
    find: (req, res, parsedUrl) => {
        // Future video maker/character generator pathways go here
        return false; 
    }
};

module.exports = http.createServer((req, res) => {
    try {
        const parsedUrl = { pathname: req.url.split('?') };
        const found = functions.find(req, res, parsedUrl);
        if (!found) { 
            if (req.url === '/' || req.url === '/index.html') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>GoAnimate Home</h1><p>Welcome to your server root.</p>');
                return;
            }
            throw new Error("Route not found");
        }
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><title>Application Error</title><style>body { background-color: #f7f8fb; color: #3f4652; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; text-align: center; padding: 0; margin: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; } .container { max-width: 600px; padding: 20px; margin-bottom: 80px; } .icon { width: 60px; height: 60px; background-color: #cbd2db; margin: 0 auto 30px auto; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); opacity: 0.6; } h1 { font-size: 30px; font-weight: 300; line-height: 1.3; margin-bottom: 15px; color: #3f4652; text-align: left; } p { font-size: 15px; color: #3f4652; line-height: 1.7; margin-bottom: 15px; text-align: left; } a { color: #2b6cb0; text-decoration: none; } a:hover { text-decoration: underline; } code { background-color: #f1f5f9; color: #334155; font-family: monospace; padding: 4px 8px; border-radius: 4px; font-size: 14px; } .footer { position: absolute; bottom: 0; left: 0; width: 100%; border-top: 1px solid #e2e8f0; background-color: #ffffff; padding: 20px 30px; box-sizing: border-box; text-align: left; } .footer-logo { font-weight: 700; font-size: 12px; letter-spacing: 1px; color: #9aa3af; text-transform: uppercase; display: flex; align-items: center; }</style></head><body><div class="container"><div class="icon"></div><h1>Application error</h1><p>An error occurred in the application and your page could not be served. If you are the application owner, check your logs for details. You can do this from the Heroku CLI with the command</p><p><code>heroku logs --tail</code></p></div><div class="footer"><div class="footer-logo"><svg width="16" height="16" viewBox="0 0 24 24" style="fill:#9aa3af; margin-right:8px;"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/></svg>Heroku</div></div></body></html>`);
    }
}).listen(process.env.PORT || 3000);
