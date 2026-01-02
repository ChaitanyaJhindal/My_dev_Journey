// //Classes in jS 
// // const user = {
// //     name : "chaitanya",
// //     age : 21
// // }// this is how simple objects in JS 

// class Rectangle{
//     constructor(width, height , color){
//         this.width=width;
//         this.height=height;
//         this.color= color;
//     }
//     area(){
//         const area= this.width * this.height;
//         return area;
//     }
//     paint(){
//         console.log(`painting with color ${this.color}`);
//         // return this.color;
//     }
// } 
// const rect = new Rectangle(2,4,"orange");
// const area = rect.area();
// console.log(area);
// rect.paint()
// const date = new Date();
// console.log(date.getMonth()+1)




// Promises 
// ddefining a promise is hard 
//using promise is really easy 
//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.
//cleaner way for callbacks
    // function callback(){
    //     console.log("5 sec ");
    // }
// setTimeout(callbback,5000);
// setTimeout(5000).then(callback);


  
// callback hell 
// setTimeout(function () {
//     console.log("hi");

//     setTimeout(function () {
//         console.log("hello");

//         setTimeout(function () { console.log("hello there")  }, 5000); }, 3000);  }, 1000);
// this is what call back hell i sexactly which is very kind ofg confusing nwo comes to better version of this thiing 


// now comes v2.0 some better one for the same but not the greates once which is promisified 
// function step3Done() {
//   console.log("hello there");
// }

// function step2Done() {
//   console.log("hello");
//   setTimeout(step3Done, 5000);
// }

// function step1Done() {
//   console.log("hi");
//   setTimeout(step2Done, 3000);
// }

// setTimeout(step1Done, 1000);


// Now cominng back to the promisised version for the same 
// function random(){
    
// }
// let p = new Promise(random)
// function callback(){
// console.log()
// }// Supposed to return u something eventually 
// p.then(callback);
// console.log(p);

// const fs = require("fs");

// console.log("Top of the file ");



// function Promisefunc(filename){
//     console.log("settimeoutpromisified called");
//     return new Promise(readthefile);
// }

// const p = Promisefunc();

// function readthefile(resolve){
//     console.log("readthefile is called");
//     setTimeout(function(){    console.log("Callbackbased settimeout is completed");   resolve();    }, 3000);
// }





// function callback(){
//     console.log("timer is done ");
// }
// p.then(callback)
// console.log("end of the file ");






// function setpromisified(){
//     return new Promise(asyncop);
// }

// const p = setpromisified();


// function asyncop(resolve){

// setTimeout(function(){resolve()}, 3000);

// }
// function callback(){
//     console.log("3 sec have passed");
// }
// p.then(callback);



// class Promise2{
//     constructor(fn){
//         function afterdone(){
//             this.resolve;
//         }
//     fn(afterdone)
//     then(callback){
//         this.resolve = callback;
//     }


// }
// }

// Newer version of promisied thing 
// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve, duration);
//     });
// }

// function callback(){
//     console.log("1 Sec has passed");
// }

// setTimeoutPromisified(1000).then(callback);




// setTimeout(function(){
//   console.log("this task is performed after 5 sec  eventually 1 ");

//   setTimeout(function(){
//     console.log("this task is performed after 3 sec eventually 2 ");
    
//     setTimeout(function(){
//         console.log("this task is performed after 1 sec eventually 3 ")
//     },1000)
//     }, 3000);

// }, 5000);
// this is what callback hell is knownn as 


// promise chaining 
//Async Await Syntax 





