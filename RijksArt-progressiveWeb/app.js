// render HTML in Node
const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error')
        }
        else {
        res.write(data)
        }
        res.end()
    })   
})

server.listen(port, function(error) {
    if (error) {
        console.log('something went wrong')
    }
    else {
        console.log('everything is good' + port)
    }
})

console.log('server running at http://127.0.0.1:3000/')