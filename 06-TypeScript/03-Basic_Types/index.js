var username = "Arif";
var age = 25;
var isStudent1 = true;
console.log("".concat(username, " is ").concat(age, " years old. student : ").concat(isStudent1));
//Primitive Type :- Number,String,boolean,undefine,symbol,bigint
var userName1 = "Arif";
var age1 = 25;
var isStudent = true;
console.log("".concat(userName1, " is ").concat(age1, " years old. student : ").concat(isStudent));
//Arrays
var skills = ["HTML", "CSS", "JavaScript"];
console.log(skills);
//Tuples
var userData = ["Arif", 25];
console.log(userData);
//Enums
var userRole;
(function (userRole) {
    userRole[userRole["ADMIN"] = 0] = "ADMIN";
    userRole[userRole["EDITOR"] = 1] = "EDITOR";
    userRole[userRole["VIEWER"] = 2] = "VIEWER";
})(userRole || (userRole = {}));
var myRole = userRole.EDITOR;
console.log(myRole);
//Any
var randomValue = 9;
console.log(randomValue);
//Unknown
var userInput = "TypeScript";
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
}
//void
function greetUser() {
    console.log("Welcome to TypeScript");
}
greetUser();
//void
var middleName = null;
