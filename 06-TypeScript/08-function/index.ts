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
  
