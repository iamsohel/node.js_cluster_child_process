const http = require('http');

const server = http.createServer();

const longComputation = () => {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += i;
    }
    return sum;
};

server.on('request', (req, res) => {
    if (req.url === '/compute') {
        const sum = longComputation();
        return res.end(sum);
    } else {
        res.end('Ok')
    }
});

server.listen(3000, () => console.log('server is listening port 3000'));