var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        console.log("Hi, I'm ".concat(this.name));
    };
    return Person;
}());
// 🔥 Creating an instance of Person
var person1 = new Person("Arif");
// person1 is an instance of Person
person1.sayHello(); // Hi, I'm Arif
