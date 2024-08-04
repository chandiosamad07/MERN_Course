// const Goodby = () =>{
//     console.log("Good by")
// }

// function Message(name ,callback){
//     console.log(`Hello ${name}`)
//     callback()
// }


// Message("Samad",Goodby)


const add = (a,b)=>{
    return a+b;
}

const multiply = (a,b)=>{
    return a*b;
}

function calculate (a,b,callback){
    console.log(callback(a,b))
}


calculate(8,7,multiply)