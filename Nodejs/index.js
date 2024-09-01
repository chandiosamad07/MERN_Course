const http = require('http');
const data = require('./data')
const dataDB = require('./mongodb')


const getData = async()=>{
    let result = await dataDB()
    let data = await result.find({}).toArray()
    console.log(data)
} 
getData()
// const server = http.createServer((req,res)=>{
//     res.statusCode =200
//     res.setHeader('Content-Type','application/json')
//     res.write(JSON.stringify(data))
//     res.end()

// })
// port =2100
// server.listen(port , ()=>{
//     console.log(`Server is runing on port ${port}`)
// })