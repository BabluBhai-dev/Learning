"use strict";
let username = "Arif";
let age = 25;
let isStudent1 = true;
console.log(`${username} is ${age} years old. student : ${isStudent1}`);
//Primitive Type :- Number,String,boolean,undefine,symbol,bigint
let userName1 = "Arif";
let age1 = 25;
let isStudent = true;
console.log(`${userName1} is ${age1} years old. student : ${isStudent}`);
//Arrays
let skills = ["HTML", "CSS", "JavaScript"];
console.log(skills);
//Tuples
let userData = ["Arif", 25];
console.log(userData);
//Enums
var userRole;
(function (userRole) {
    userRole[userRole["ADMIN"] = 0] = "ADMIN";
    userRole[userRole["EDITOR"] = 1] = "EDITOR";
    userRole[userRole["VIEWER"] = 2] = "VIEWER";
})(userRole || (userRole = {}));
let myRole = userRole.EDITOR;
console.log(myRole);
//Any
let randomValue = 9;
console.log(randomValue);
//Unknown
let userInput = "TypeScript";
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
}
//void
function greetUser() {
    console.log("Welcome to TypeScript");
}
greetUser();
//Null
let middleName = null;
//Undefined
let jobTitle = undefined;
//Never
function throwError() {
    throw new Error("Something went wrong!");
}
