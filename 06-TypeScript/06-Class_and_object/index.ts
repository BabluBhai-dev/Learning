//class Defination

class Player{
    name:string;
    score:number;
}

const player1 =new Player();
player1.name="Arif";
player1.score=100;

console.log(player1.name);
console.log(player1.score);

//Constructor

class Player{
    name:string;
    score:number;
    constructor(name:string,score:number){
        this.name=name;
        this.score=score;
    }
}
const player2=new Player( "Alice",150);

console.log(player2);

//This keyword

class Game{
    title:string;
    constructor(title:string){
        this.title=title;
    }
    showTitle(){
        console.log("Game : ",this.title);
    }
}

//Access Modifiers

class BankAccount{
    public owner:string;
    private balance:number;

    constructor(owner:string,balance:number){
        this.owner=owner;
        this.balance=balance;
    }

    showBalance(){
        return this.balance;
    }
}

//Readonly Properties

class Book{
    readonly isbn:string;
    constructor(isbn:string){
        this.isbn=isbn;
    }
}

//optional Properties

class Student{
    name:string;
    age?:number;

    constructor(name:string,age?:number){
        this.name=name;
        this.age =age;
    }
}

//parameter Properties-(Shortcut)

class Teacher{
    constructor(public name:string,private subject:string){
        getSubject(){
            return this.subject;
        }
    }
}

//Getter and Setter 

class Product {
    private _price: number = 0;
  
    get price(): number {
      return this._price;
    }
  
    set price(value: number) {
      if (value > 0) {
        this._price = value;
      }
    }
  }
  
  const item = new Product();
  item.price = 500;
  console.log(item.price); // 500
  
//Static Member

class MathHelper {
    static PI = 3.14;
  
    static square(num: number) {
      return num * num;
    }
  }
  
  console.log(MathHelper.PI); // 3.14
  console.log(MathHelper.square(5)); // 25

// Abstract Classes and Methods — (Only for Inheritance)

abstract class Animal {
    abstract makeSound(): void;
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Woof! 🐶");
    }
  }
 
//Project Exmaple

class User{
    constructor(public username:string,private password:string){}
}
class Product{
    constructor(public name:string,public price:number){}
}

class Cart{
    private items:Product[]=[];

    addtoCart(product:Product){
        this.items.push(product);
    }
}