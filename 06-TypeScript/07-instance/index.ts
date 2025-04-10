
class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hi, I'm ${this.name}`);
    }
  }
  
  // 🔥 Creating an instance of Person
  const person1 = new Person("Arif");
  
  // person1 is an instance of Person
  person1.sayHello(); // Hi, I'm Arif
  