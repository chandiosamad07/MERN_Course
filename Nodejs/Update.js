const dbconnect = require('./mongodb')

const updateData = async () =>{
    let db = await dbconnect();
    let result = await db.updateOne({name:'17 pro'},{
        $set:{name:'27 pro'}})
  
}

updateData()