# 🏫 Classes and Objects in TypeScript

Think of a **class** like a **blueprint** for making objects.

🛠 Example:
If you’re making a game, a **`Player` class** is like a **blueprint** for all players.  
Each player (object) has its **own name, score**, etc.

---

## ✅ 1. Class Definition

A **class** is a blueprint for objects.

```ts
class Player {
  name: string;
  score: number;
}
```

> 🎮 Now you can create players using this blueprint!

```ts
const player1 = new Player();
player1.name = "Arif";
player1.score = 100;
```

---

## ✅ 2. Constructors — (Auto-setup Function)

The **constructor** runs when you make an object. It helps **set initial values**.

```ts
class Player {
  name: string;
  score: number;

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
}
const player2 = new Player("Ali", 150);
```

---

## ✅ 3. `this` Keyword — (Points to current object)

`this` refers to the object that’s being created or used.

```ts
class Game {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
  showTitle() {
    console.log("Game:", this.title);
  }
}
```

> `this.title` means “the title of this object”.

---

## ✅ 4. Access Modifiers — (Control who can see what 👀)

- `public`: Anyone can access (default)
- `private`: Only inside the class
- `protected`: Inside class and subclasses

```ts
class BankAccount {
  public owner: string;
  private balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  showBalance() {
    return this.balance; // ✅ Works
  }
}
```

> ❌ `account.balance` is not allowed outside the class.

---

## ✅ 5. Readonly Properties — (Cannot change after set)

Use `readonly` when value should **never change** after setup.

```ts
class Book {
  readonly isbn: string;
  constructor(isbn: string) {
    this.isbn = isbn;
  }
}
```

---

## ✅ 6. Optional Properties — (May or may not be there)

Use `?` if something is **optional**.

```ts
class Student {
  name: string;
  age?: number; // Optional

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}
```

---

## ✅ 7. Parameter Properties — (Shortcut ⏩)

Instead of writing `this.name = name`, we write everything inside the constructor.

```ts
class Teacher {
  constructor(public name: string, private subject: string) {}

  getSubject() {
    return this.subject;
  }
}
```

---

## ✅ 8. Getters and Setters — (Smart ways to access/update)

```ts
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
```

---

## ✅ 9. Static Members — (Shared for all objects)

```ts
class MathHelper {
  static PI = 3.14;

  static square(num: number) {
    return num * num;
  }
}

console.log(MathHelper.PI); // 3.14
console.log(MathHelper.square(5)); // 25
```

> You don’t need to make an object to use static things.

---

## ✅ 10. Abstract Classes and Methods — (Only for Inheritance)

Think of it as a **half-ready class** you can’t use directly — only **extend**.

```ts
abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof! 🐶");
  }
}
```

> ❌ You can’t do: `new Animal()`  
> ✅ You can do: `new Dog()` and it will work.

---

## 📦 Project Example

If you are building a **shopping website**, you can use classes like:

```ts
class User {
  constructor(public username: string, private password: string) {}
}

class Product {
  constructor(public name: string, public price: number) {}
}

class Cart {
  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }
}
```

- 🛒 `User` to handle login
- 📦 `Product` to store product info
- 🛍️ `Cart` to manage orders

