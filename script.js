// Looping Statements
// 1.Print Numbers
// Print numbers from 1 to 20 using for loop

// for (let i = 1; i<=20; i++) {
//     console.log(i); 
// }

// 2.Odd Numbers
// print all odd numbers from 1 to 50

// for (let i = 0; i <=50; i++) {
//     if (i%2 != 0) {
//         console.log(i);     
//     }
// }

// 3.Multiplication Table
// print multiplication table of 7

// for (let i = 1; i <= 10; i++) {
//     console.log("7 "+"x "+i +" = " + (7) * i);
// }

// 4.Reverse Counting
// using while loop ,printing numbers from 20 to 1

// let i=20
// while (i >= 1) {
//     console.log(i);    
//     i--
// }

// 5.Sum of Numbers
// Find total sum of numbers from 1 to 100

// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     count += i 
// }
// console.log(count);

// 6.Array Loop
// Loop through this array and print all values

// let fruits = ["apple" ,"banana" ,"orange" ,"grapes"];
// for (let i of fruits) {
//     console.log(i);
// }

//7.Count even Numbers
// Count how many even numbers are present between 1 to 50.

// let count = 0;
// for (let i = 1; i <=50; i++) {
//     if (i%2 == 0) {
//         count += 1        
//     }
// }
// console.log(count);

// 8.Star Pattern
// Print thise pattern using loops:

// for (let i = 1; i <=5; i++) {
//     let row = "";

//     for (let j = 1; j<= i; j++) {
//         row +="*"
//     }
//     console.log(row); 
// }

// Functions
// 9.Simple Functions
// Create a function named welcome() that prints.

// function welcome(){
//     console.log("Welcome to JavaScript");    
// }
// welcome();

// 10.Function with Parameter
// function employee(name){
//     return ("Hello "+name); 
// }
// console.log(employee('Mohamed Thanveer'));

// 11.Add Two Numbers
// Create a function that takes 2 numbers and returns the addition

// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));

// 12.Salary Bonus
// Create a function that adds bonus to employee salary.

// function payment(salary) {
//     let bonus = 5000
//     return salary + bonus
// }
// console.log(payment(500000));

// 13.Object loop
// Print all keys and values using for in

// let student = {
//     name: "Mohamed Thanveer",
//     cours: "Java Script",
//     marks: 95
// }
// for (let a in student){
//     console.log(a); 
// }

// 14.Full largest Number
// Create a function to find the largest number between two values.

// function largestNumber(a,b){
//     if (a > b){
//         return a;
//     } 
//     else{
//         return b;
//     }
// }
// console.log(largestNumber(10,50));

// 15.Mini Employee Task
// Create an employee object and print
let employee = {
    name: "Mohamed Thanveer",
    department:"CSE",
    salary:200000,
    bonus:4000
}
function displayEmployee(emp){
    console.log("Employee Name:",emp.name);
    console.log("Department:",emp.department);
    console.log("Salary:",emp.salary);
    console.log("Bonus:",emp.bonus);    
}
displayEmployee(employee);