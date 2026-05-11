// Task1 -Predict the output

// console.log(typeof("10"+5));

// Ans: 105 ,datatype string

// console.log(typeof(10 + true));

// Ans 11 ,boolean

// console.log(typeof(false + null));

// Ans 0 ,boolean

// console.log(typeof("Hello" + undefined));

// Ans Helloundefined ,string

// console.log(typeof([1,2]+5));

// Ans 1,25 Number

// Task2 -Implicit Type Casting examples 
// 1.string+Number
// console.log(typeof ("4"+2));

// Ans string

// 2.Boolean + Number 
// console.log(typeof (true + 1));

// Ans number

// 3.Array + string
// console.log(typeof([1,"s",true],"abc"));

// Ans string

// 4.object+number
// console.log(typeof({name:"thanveer"}+32));

// Ans string

// 5.Null + number
// console.log(typeof(null + 10));

// Ans number

// Task3 -Explicit Type Casting
// Convert the following into number

// console.log(Number("500"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number("abc"));
// console.log(Number([100]));
 
// Task4 -Boolean Constructor
// console.log(Boolean(""));
// console.log(Boolean("javascript"));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean([]));
// console.log(Boolean({}));

// Task5-Student Pass or Fail
// let mark = 45;

// if (mark > 35){
//     console.log("Pass"); 
// }
// else{
//     console.log("Fail"); 
// }

// Task 6 -Voting Eligiblity
// let age = 20;

// if (age > 18) {
//     console.log("Eligible"); 
// }
// else{
//     console.log("Not Eligible"); 
// }

// Task 7 -Greatest Number
// Find greatest among 3 numbers using if else if.
// let a = 50;
// let b = 80;
// let c = 30;

// if (a > b && a > c) {
//     console.log(`Greatest number is ${a}`);
// }
// else if(b > a && b > c){
//     console.log(`Greatest number is ${b}`); 
// }
// else{
//     console.log(`Greatest number is ${c}`); 
// }

// Task 8 -Trafic Light System
// using switch statement

// let signal = "green" ;

// switch (signal){
//     case "red" : console.log("Stop vehicle");
//     break;

//     case "yellow" : console.log("start vehicle");
//     break;

//     case "green" : console.log("Move vehicle"); 
// }

// Task 9 -Login System
// Create variables:

// let userName = "admin";
// let password = "1234";

// if (userName == "admin") {
//     if (password == "1234") {
//         console.log("Login Success"); 
//     } 
// }
// else{
//     console.log("Invalid Login"); 
// }

// Task 10 -Session Finder
// Take hour value:

let hour = 20;

if (hour >= 1 && hour <= 12) {
    console.log("Morning"); 
}
else if(hour >=13 && hour <= 15){
    console.log("Afternoon"); 
}
else if (hour >= 16 && hour <= 19) {
    console.log("Evening"); 
}
else if (hour >= 20 && hour <= 24){
    console.log("Night"); 
}