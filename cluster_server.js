const http = require('http');

const pid = process.pid;

let usersCount;

const server = http.createServer((req, res) => {
    for (let i = 0; i < 100000000; i++); //simulate cpu work
    res.write(`Handle by process id ${pid}\n`)
    res.end(`Users: ${usersCount}`)
});

server.listen(3002, () => console.log(`server is listening port 3002 and process id ${pid}`));

process.on('message', msg => {
    usersCount = msg.usersCount;
})