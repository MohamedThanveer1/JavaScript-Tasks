//Task 1 - Student Registration Form
// let userName = prompt("Enter student name?");
// let department = prompt("Enter Department");
// const age = prompt("Enter age?");

// console.log(`Welcome: ${userName}`);
// console.log(`Department: ${department}`);
// console.log(`Age: ${age}`);

// Task 2 -ATM Withdrawal System

// let balance = 1000;
// let minWithdrawal = 100;

// let withdrawalAmount = prompt("Enter amount to withdraw:");
// withdrawalAmount = Number(withdrawalAmount);

// if (withdrawalAmount < minWithdrawal){
//     console.log("Transaction failed: Minimum withdrawal is "+minWithdrawal);
// }
// else if (withdrawalAmount <= balance){
//     balance -=withdrawalAmount;
//     console.log("Transaction Successful");
//     console.log("Remaining Balance: " + balance); 
// }
// else{
//     console.log("Transaction Failed: Insufficient Balance.");
// }

// Task 3 -Swigy Discount Checker
// let orderAmount = 600;
// let deliveryStatus = (orderAmount > 500) ? "Free Delivery available": "Delivery Charges Applied";
// console.log(deliveryStatus);

// Task 4 - Instagram Login System

// let userName = prompt("Enter username:");
// if (userName === 'admin') {
//     let password = prompt("Enter password:");

//     if(password === '1234'){
//         console.log("Login Success");
//     }
//     else{
//         console.log("Wrong password");
//     }
// }
// else{
//     console.log("Invalid Username"); 
// }

// Task 5 - Traffic Signal System

// let signal = "red";
// switch (signal) {
//     case "red":
//         console.log("STOP");
//         break;
//     case "yellow":
//         console.log("READY");
//         break;
//     case "green":
//         console.log("GO");
//         break;
//     default:
//         console.log("Invalid Color");
// }

// Task 6 - Employee Salary Calculator

// function salaryCalculation(salary ,bonus) {
//     const totalSalary = salary + bonus;
//     return totalSalary;
// }
// let employeeSalary = salaryCalculation(25000 ,5000);
// console.log("Total Salary: "+employeeSalary);

// Task 7 - E-Commerce Cart Total

// let prices = [100 ,200 ,300 ,400];
// let total = 0;

// for (let i = 0; i < prices.length; i++) {
//     total += prices[i];     
// }

// let average = total / prices.length;
// console.log("Total Price:" +total);
// console.log("Average Price:" + average);

// Task 8 -WhatsApp Contact Book
// let user = {
//     name:"Ram",
//     phone:"555-0190",
//     status:"Active"
// };

// for (let key in user) {
//     if (user.hasOwnProperty(key)) {
//         console.log(key);
        
//     }    
// }

// Task 9 -Movie Ticket Booking
// function payment(movieName) {
//     console.log(`Successfully processed ${movieName}`);
// }

// function bookTicket(movieName ,seatNumber ,callback) {
//     console.log(`Booking seat ${seatNumber}`);
    
//     let bookingSuccess = true;

//     if (bookingSuccess) {
//         console.log(`Booking confirm ${movieName}`);
//         callback(movieName);
//     }
//     else{
//         console.log("Booking failed");        
//     }
// }

// bookTicket("Inception"," A12",payment);

// Task 10 -Food Delivery Time Tracker
function* foodDeliveryTracker() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}
let tracker = foodDeliveryTracker();

console.log(tracker.next().value);
console.log(tracker.next().value);
console.log(tracker.next().value);
console.log(tracker.next().value);