interface Address {
    city: String ;
    country : String;
    pincode: number;
    houseNumber: String 
}



interface User {
    name: string , 
    age: number , 
    address: Address
}

interface Office {
    address : Address
}
let user2: User = {
    name: "chaitanya",
    age: 21,
    address: {
        city: "Fzd",
        country: "India",
        pincode: 123456,
        houseNumber: "12A"
    }
}























































// function sum(a: number , b: number): number {
//     return a + b ;
// } 
 




























































// let greet = () =>{
//     console.log("Hi ! there ");
// }
















































// function delayedcall(fun: ()=>void){
//     setTimeout(fun,100);
// }
// delayedcall(function(){
//     console.log("Hello world");
// })


























































// function greet(num1: number  , num2: number ) {
//     console.log(num1+num2);
// }

// greet(3,5);