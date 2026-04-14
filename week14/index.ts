//read only
// IN JS or TS we can change the inernal value of array or object but can't change the whole array or the object 
// But to avoid that or to inforce that read-only mode read the code below 



// type User = {
//     readonly name : String ,
//     readonly age : number ;
// }


type User = {
     name : String ,
     age : number ;
} 
// Other alternative instaed of writing read only in very filed can do this simply .
const user : Readonly <User> =  {
    name : 'John ',
    age : 21
}
 
// user.age =12 can't do this in read only mode 






























































// interface User {
//     name: string;
//     age: number;
//     email: string;
//     id: string;
//     password: string;
// }

// // Pick specific fields
// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>;

// // Make them optional
// type UpdatePropsOptional = Partial<UpdateProps>;

// function updateUser(updatesProps: UpdatePropsOptional) {
//     // hit the DB to update the user
// }

// updateUser({
//     name: "Chaitanya",
//     age: 21,
//     email: "xyz"
// });



























































// interface User {
//     name: string , 
//     age: number ;
// };

// function sumOfAge(user1: User, user2:User){
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name:'Taro',age:20},{name:'Chaitanya',age:21});
// console.log(age);






















































// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// function filterUsers(users: User[]): User[] {
//     return users.filter(user => user.age > 18);
// }

// const filtered = filterUsers([
//     {
//         firstName: "Chaitanya",
//         lastName: "Jhindal",
//         age: 21
//     }
// ]);

// console.log(filtered);



































// function getMax(nums: number[]){

// }
// getMax([1,2,3])



























































// // interface vs types 
// // create two types called user and Admin 
// // create a function that takes either a user or an admon as an input  , and returns a string sayyoing "welcome " 


// interface Admin {
//     name: String , 
//     permissions: String ;
// }

// interface  User{
//     name : String , 
//     age : number ;
// }

// type UserOrAdmin = User | Admin ; // Union (|) means value can be one of multiple types → only common properties are safe; Intersection (&) means value is all types together → all properties are available

// function greet (user : UserOrAdmin){
//     console.log(user.name)
// }

// interface User2 {
//  age : number | string 
// }

















































// abstract class User {
//     name : String ;
//     constructor(name: String){
//         this.name =name ;
//     }
//     abstract greet: () => string ;
// }
// class Employee implements User {
//     name: String ; 
//     constructor(name: string ){
//         this.name = name 
//     }
//     greet(){
//         return "hi " + this.name 
//     }
// }





























































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