// Task1 -Basic Function
// Create a function called welcome user

// function welcomeUser(name){
//     console.log("Welcome ",name);
// }
// welcomeUser("Thanveer")

// Task2 - Parameter + Return
// Create a function square Number.

// function squareValue(number){
//     console.log(number**2); 
// }
// squareValue(2)

// Task 3-Object Function
// Create an bonus

// let employe = {
//     name:"Rahul",
//     salary: 50000
// }
// function employeBonus(bonus){
//     let totalSalary = employe.salary + bonus;
//     console.log(employe.name);
//     console.log(totalSalary);
// }
// employeBonus(5000);

// Task 4- Scope Checking
// Inside function:
// Create var ,let ,const

// Ans
// function scopeTest(){
//     if (true){
//         var varVariable = "Var variable";
//         let letVariable = "Let variable";
//         const constVariable = "Const variable";
//     }

//     console.log(varVariable);
//     console.log(letVariable);
//     console.log(constVariable); 
// }
// scopeTest()

// varVariable gives output ,letVariable and constVariable gives reference error  

// Tak 5-Arrow Function
// Conver into Arrow function

// let add =(a ,b) =>{
//     console.log(5 + 10); 
// }
// add()

// Task 6- Callback Function

// function multiply(a ,b) {
//     return a * b;
// }

// function calculator(callback ,num1 ,num2){
//     let res = callback(num1 ,num2)
//     console.log(res);
// }

// calculator(multiply ,5 ,2);

// o/p 10

// Task 7 -Generate Function
// Create generator function offers.

// function *offers(){
//     yield "50% OFF",
//     yield "Free Delivery",
//     yield "Cashback"
// }
// let offer = offers()
// console.log(offer.next().value);
// console.log(offer.next().value);
// console.log(offer.next().value);

// Task 8 -Default Parameter
// Create student(name ,course = "JAVASRIPT")

// function student(name ,course = "JAVASRIPT"){
//     console.log("Name :",name);
//     console.log("Course :",course); 
// }
// student("Thanveer")

// Task 9 -Currying
// Create currying function for multiplication

// function multiplication(a) {
//     return function(b){
//         return function(c){
//             return a*b*c
//         }
//     }
// }
// console.log(multiplication(2)(3)(4));

// o/p:24

// Task 10 -Spread Operator 
// Merge These arrays

// {et a = [1 ,2 ,3];
// let b } [4 ,5 ,6];

// let totalArray = [...a,...b]


// console.log(totalArray);

// o/p:[1,2,3,4,5,6]

//Task 11 -Object Spread
// Merge two objects

// let obj1 = {
//     name:"Navi"
// }
// let obj2 = {
//     role:"Developer"
// }

// let mergeObject = {...obj1,...obj2};
// console.log(mergeObject);

// o/p  {
//      name:"Navi",
//      role:"Developer"} 

// Task 12 -Rest Operator
// create function
// numbers(...num)

// function numbers(...a){
//     console.log(a);
    
//     let sum = 0;
//     for (let i = 0; i <a.length; i++) {
//         sum += a[i];
//     }
//     console.log(sum);
// }
// numbers(1,2,3,4);


// Mini Challenge
