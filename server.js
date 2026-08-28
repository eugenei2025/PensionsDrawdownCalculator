// Minimal dependency-free static server for the Pension Drawdown Calculator.
// Forwards CLI args: node server.js --port 7100 --host 127.0.0.1
const http = require('http');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
function arg(name, def) {
    const i = args.indexOf('--' + name);
    if (i >= 0 && args[i + 1]) return args[i + 1];
    const eq = args.find(a => a.startsWith('--' + name + '='));
    if (eq) return eq.split('=').slice(1).join('=');
    return def;
}
const port = parseInt(arg('port', process.env.PORT || '7100'), 10);
const host = arg('host', '127.0.0.1');

const mime = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p === '/') p = '/index.html';
    const file = path.join(__dirname, path.normalize(p).replace(/^([/\\])+/, ''));
    if (!file.startsWith(__dirname)) { res.writeHead(403); res.end(); return; }
    fs.readFile(file, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': mime[path.extname(file).toLowerCase()] || 'application/octet-stream' });
        res.end(data);
    });
}).listen(port, host, () => console.log(`Pension Drawdown Calculator -> http://${host}:${port}/`));
