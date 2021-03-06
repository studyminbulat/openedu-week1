const http = require('http')
const port = process.env.PORT || 3000
const requestHandler = (request, response) => {
    console.log(request.url)
	response.setHeader('X-Author', 'minnemullin');
	response.setHeader('Access-Control-Allow-Origin', '*');
    response.end('minnemullin')
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})