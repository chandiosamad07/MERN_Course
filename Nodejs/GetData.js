const db = require('./mongodb')

async function Getdata(){
    let result = await db()
    let data = await result.find({}).toArray()
    console.log(data)
}

Getdata()