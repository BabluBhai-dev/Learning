## 🚀 What is an Instance?

Think of a **class** like a **cookie cutter** 🍪 — it’s a blueprint.

And an **instance** is the **cookie** you make using that cutter.

### 🍪 Real-Life Example:

- Class: `Car` → the blueprint.
- Instance: `myCar` → the actual car you create from the blueprint.

---

## 🧠 Technical Definition:

An **instance** is an **object** created **using the `new` keyword** from a class.

---

## ✅ Example in TypeScript:

```ts
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
```

---

## 🧪 Checking if it's an Instance

You can use `instanceof` keyword:

```ts
console.log(person1 instanceof Person); // true ✅
```

---

## 💡 Why Instances Matter

Using instances:
- You can create **multiple objects** from one class.
- Each object can have **different values** but the **same behavior**.

```ts
const person2 = new Person("Ali");
person2.sayHello(); // Hi, I'm Ali
```

---

## 🛠 Project Use Case Example

Let’s say you're building a **chat app**:

```ts
class Message {
  constructor(public sender: string, public content: string) {}

  send() {
    console.log(`${this.sender}: ${this.content}`);
  }
}

const msg1 = new Message("Arif", "Hello!");
const msg2 = new Message("Ali", "Hey Arif!");

msg1.send(); // Arif: Hello!
msg2.send(); // Ali: Hey Arif!
```

Both `msg1` and `msg2` are **instances** of the `Message` class.

---

## 📦 Summary

| Concept      | Meaning                                   |
|--------------|--------------------------------------------|
| Class        | Blueprint / Template                      |
| Object       | Real-world thing created using class      |
| Instance     | The object created using `new Class()`    |

