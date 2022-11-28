const http = require('http')

const server = http.createServer((req, res)=>{
    res.end(JSON.stringify({message: 'Hola mundo!!!'}))
})

const connection = server.listen(3000, ()=>{
    console.log(`Listening app port ${connection.address().port}`)
})


