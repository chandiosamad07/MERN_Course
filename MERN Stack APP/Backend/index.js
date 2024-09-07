const express = require('express')
const dbConnect = require('./connection')
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


app.get('/GetData/:id',async(req,res)=>{
  
    let data = await dbConnect();
    let result = await data.findOne({_id: new mongodb.ObjectId (req.params.id)})
    if(result){
        res.send(result)
    }
    else{
        res.send({result : "No record Found"})
    }
})


app.post('/post',async(req,res)=>{
    console.log(req.body)
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result)
})

app.put('/update/:id',async(req,res)=>{
   let data = await dbConnect();
   let result = await data.updateOne({_id: new mongodb.ObjectId (req.params.id)},
    {
        $set : req.body
    })
   res.send(result)
})


app.delete('/delete/:id',async(req,res)=>{
    let data = await dbConnect()
    let result = await data.deleteOne({_id: new mongodb.ObjectId (req.params.id)})
    res.send(result)
})


app.listen(5000,()=>{
    console.log("server is runing on port 5000")
})