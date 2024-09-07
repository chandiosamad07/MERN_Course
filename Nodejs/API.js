const express = require('express')
const dbConnect = require('./mongodb')
const cors = require('cors');
const app = express()
const mongodb = require('mongodb')
app.use(express.json())
app.use(cors()); 

app.get('/Getdata',async (req,res)=>{
    let data = await dbConnect();
    let result = await data.find({}).toArray()  
    res.send(result)
})

app.post('/post',async(req,res)=>{
    console.log(req.body)
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result)
})

app.put('/update',async(req,res)=>{
   let data = await dbConnect();
   let result = await data.updateOne({name:req.body.name},{$set:req.body})
   res.send(result)
})


app.delete('/:id',async (req,res)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId (req.params.id)})
    console.log(result)
    res.send("done")
})

app.listen(5000,()=>{
    console.log("server is runing on port 5000")
})