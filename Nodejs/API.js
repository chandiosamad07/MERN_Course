const express = require('express')
const dbConnect = require('./mongodb')
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(cors()); 

app.get('/Getdata',async (req,res)=>{
    let data = await dbConnect();
    let result = await data.find({}).toArray()  
    res.send(result)
})

app.listen(5000,()=>{
    console.log("server is runing on port 5000")
})