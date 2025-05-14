const next = require('next')
const { createServer } = require('https');
const fs = require('fs');
const { parse } = require('url')

const port = 3000
const host = "0.0.0.0"
const prod = process.env.NODE_ENV !== 'production'
const app = next({ prod, hostname: host, port })
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/js.oneofit.com/fullchain.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/js.oneofit.com/privkey.pem'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, host, err => {
    if (err) throw err;
    //console.log(`> Ready on https://0.0.0.0:${port}`);
  })

}).catch(err => {
  console.log('Error:::::', err)
})

