const dbconnect = require('./mongodb')

const insert = async ()=>{
    let db = await dbconnect()
    
    let result = await db.insertMany([
        {
            name:"18 pro",Company:"Apple"
        },
        {
            name:"19 pro",Company:"Apple"
        },
        {
            name:"20 pro",Company:"Apple"
        }
    ])
    console.log(result);
}

insert();
