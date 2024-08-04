// let array = ["1","3","5","7","9"]

// for(let num of array){
//     if(num=="5"){
//         continue;
//     }
//     console.log(num)
// }

// array.map((a)=>{console.log(a*a)})
// let result = array.filter((num)=>num=="5")
// console.log(result)

// let arrayEven=[2,4,6,8]
// let sum = arrayEven.reduce((ac,cr)=>ac+cr ,0)
// console.log(sum)
// let str1 = ["Samad","Abdul" ,"Zeshan"]
// str1.reverse()
// console.log(str1)
// let arrCom = array.concat(arrayEven)

// arrCom.sort()
// console.log(arrCom)





// let size = array.length;
// for(let i=0;i<size;i++){
//     console.log(array[i])
// }
// console.log(array)

// array.sort()
// console.log(array)
// array.reverse()
// console.log(array)
// array.pop()shift();
// array.shift();
// array.unshift(5);
// console.log(size)
// for(let i=0;i<size;i++){
//     console.log(array[i])
// }


let arrayD = [1,2,3,4,5,6,7,8,9]

let [a,b,c,...rest] = arrayD;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(rest)

let arr1=[1,2,3]
let arr2=[3,2,4,5,6]
let arr3=[...arr1,...arr2]
console.log(arr3)