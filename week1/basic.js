function solve(arr){
 let arr2 = [];
 for(let i=0;i<arr.length;i++){
    if(arr[i].gender==="male"){
        arr2.push(arr[i].name);
    }
   
  }
   return arr2;
}
const users = [{
    name: "Chaitanya",
    age:21,
    gender:"male"
},
{
    name: "Deepak",
    age: 22,
    gender:"male"
},
{
    name: "Pooja",
    age:20,
    gender:"female"
}
]
console.log(solve(users));