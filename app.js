const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Here you are');
        res.end(); // End the response after writing
    } else if (req.url === '/about') {
        res.write('You are here too');
        res.end(`<h1>
            Oh my God
        </h1>`); // End the response after writing
    } else {
        res.write('404 - Not Found');
        res.end(); // End the response after writing
    }
});

server.listen(5000, () => {
    console.log('Server running on port 5000');
});
