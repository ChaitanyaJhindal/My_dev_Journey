abstract class User {
    name : String ;
    constructor(name: String){
        this.name =name ;
    }
    abstract greet: () => string ;
}
class Employee implements User {
    name: String ; 
    constructor(name: string ){
        this.name = name 
    }
    greet(){
        return "hi " + this.name 
    }
}





























































// interface People {
//     name: String , 
//     age: number ,
//     greet: () => String ,
// }

// let person: People ={
//     name:"Harkirat ",
//     age : 21 , 
//     greet: () => {
//         return "hi " 
//     }
// }

// class Manager implements People {
//     name : String ;
//     age: number ;
   
//     constructor( name : String , age: number ){
//         this.name = name ; 
//         this.age = age ;
//     }
//      greet(): string {
//         return "Hello from Manager";
//     }
// }
// let user = new Manager ("Rahul",  40);
// console.log(user.name)































































































// interface Address {
//     city: String ;
//     country : String;
//     pincode: number;
//     houseNumber: String 
// }



// interface User {
//     name: string , 
//     age: number , 
//     address: Address
// }

// interface Office {
//     address : Address
// }
// let user2: User = {
//     name: "chaitanya",
//     age: 21,
//     address: {
//         city: "Fzd",
//         country: "India",
//         pincode: 123456,
//         houseNumber: "12A"
//     }
// }

// function isLegal(user2: User) : boolean {
//     if(user2.age >= 18 ){
//         return true 
//     }
//     else{
//         return false
//     }
// }


// if (isLegal(user2) == false) {
//     console.log("you are not legal");
// } else {
//     console.log("You are legal");
// }

















































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