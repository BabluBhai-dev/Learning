//function

let greet: (name: string) => void;

greet = (name) => {
  console.log("Hello", name);
};

greet("Arif"); // Hello Arif

//Optional and Default Parameters

function greetUser(name: string, age?: number) {
    console.log("Hi", name);
    if (age) {
      console.log("You are", age, "years old.");
    }
  }
  
  greetUser("Arif");
  greetUser("Ali", 25);
  
  // ✅ Default
  function sayHello(name: string = "Guest") {
    console.log("Hello", name);
  }
  
  sayHello(); // Hello Guest
  sayHello("Arif"); // Hello Arif
  
//Rest Parameters

function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sumAll(1, 2, 3)); // 6
  console.log(sumAll(10, 20, 30, 40)); // 100
  
// Function Overloads

function greetPerson(name: string): string;
function greetPerson(age: number): string;
function greetPerson(input: string | number): string {
  if (typeof input === "string") {
    return `Hello ${input}`;
  } else {
    return `You are ${input} years old`;
  }
}

console.log(greetPerson("Arif")); // Hello Arif
console.log(greetPerson(25)); // You are 25 years old
