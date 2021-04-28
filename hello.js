const http = require('http')
const port = 7777
const service = http.createServer((req,res) => {
    res.end = ('hello,world')
})
service.listen(port,() => {
    console.log('Serverlisteningon:http://localhost:%s',port)
})
