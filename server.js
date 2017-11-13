import http from 'http';

const server = http.createServer();

server.on('request', (req,res) => {
    res.write('Hello Http!\n');
    setTimeout(() => {
        res.write('I can stream\n');
        res.end();
    }, 3000);
});

server.listen(8080);