let a=10
let b=15
let c =20
let d =30
let e=10
let f=15
let g =20
let h =30

// function Greating(){
//   console.log("Hello how are You!")
// }
// Greating()

// const Hello = (a,b,c,d)=>{
//  return a+b+c+d
// }
// console.log(Hello(12,2,3,4))




// console.log("a + b = ",(a+b))
// console.log("c + d = ",(c+d))

// function add(a,b,c,d){
//   return a+b+c+d;
// }

// console.log(add(12,2,3,4))

function add (...rest){
    let sum=0;
    for(let i=0;i<rest.length;i++){
        sum=sum+rest[i];
    }
    return sum;
}

console.log(add(1,2,4,5,6,7,4,5,67,864,434))