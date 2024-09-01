const dbconnect = require('./mongodb')

const deletData = async () =>{
    let db = await dbconnect()
    let result = await db.deleteMany({name:"17 pro"})
    if(result.acknowledged){
        console.log("Data Deleted")
    }
}

deletData()