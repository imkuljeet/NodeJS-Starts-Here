const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const headers = req.headers;

    console.log(url, method, headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My created Page</title></head>');
    res.write('<body>');

    if (url === '/home') {
        res.write('<h1>Welcome home</h1>');
    } else if (url === '/about') {
        res.write('<h1>Welcome to About Us page</h1>');
    } else if (url === '/node') {
        res.write('<h1>Welcome to my Node.js project</h1>');
    } else {
        res.write('<h1>Welcome/h1>');
    }

    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);
