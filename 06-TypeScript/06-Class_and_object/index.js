//class Defination
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
var player1 = new Player();
player1.name = "Arif";
player1.score = 100;
console.log(player1.name);
console.log(player1.score);
//Constructor
var Player = /** @class */ (function () {
    function Player(name, score) {
        this.name = name;
        this.score = score;
    }
    return Player;
}());
var player2 = new Player("Alice", 150);
console.log(player2);
//This keyword
var Game = /** @class */ (function () {
    function Game(title) {
        this.title = title;
    }
    Game.prototype.showTitle = function () {
        console.log("Game : ", this.title);
    };
    return Game;
}());
//Access Modifiers
var BankAccount = /** @class */ (function () {
    function BankAccount(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    BankAccount.prototype.showBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
//Readonly Properties
var Book = /** @class */ (function () {
    function Book(isbn) {
        this.isbn = isbn;
    }
    return Book;
}());
//optional Properties
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
//parameter Properties-(Shortcut)
var Teacher = /** @class */ (function () {
    function Teacher(name, subject) {
        this.name = name;
        this.subject = subject;
        getSubject();
        {
            return this.subject;
        }
    }
    return Teacher;
}());
//Getter and Setter 
var Product = /** @class */ (function () {
    function Product() {
        this._price = 0;
    }
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (value > 0) {
                this._price = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var item = new Product();
item.price = 500;
console.log(item.price); // 500
//Static Member
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.square = function (num) {
        return num * num;
    };
    MathHelper.PI = 3.14;
    return MathHelper;
}());
console.log(MathHelper.PI); // 3.14
console.log(MathHelper.square(5)); // 25
// Abstract Classes and Methods — (Only for Inheritance)
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof! 🐶");
    };
    return Dog;
}(Animal));
//Project Exmaple
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.addtoCart = function (product) {
        this.items.push(product);
    };
    return Cart;
}());
