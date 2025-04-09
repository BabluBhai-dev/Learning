## ✅ 1️⃣ What is **Type Annotation**?

Imagine you're labeling your **school notebooks**:

- 📘 Math Notebook → only for math
- 📙 Science Notebook → only for science

In TypeScript, **type annotation** is like labeling your variables.

### 🧠 Syntax:
```ts
let age: number = 10;
let name: string = "Arif";
let isCool: boolean = true;
```

Here:
- `: number` means "this variable should hold numbers only"
- `: string` means "only text allowed"
- `: boolean` means "true or false only"

### 🛠 Real-world usage:
When you're creating **form inputs**, you know what type of value you'll get from a field.

```ts
let userAge: number = 18;
let userName: string = "Arif";
```

---

## ✅ 2️⃣ What is a **Type**?

A **type** lets you create your **own custom label** for a group of data.

### 🧠 Example:

```ts
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let user1: User = {
  name: "Arif",
  age: 25,
  isAdmin: true,
};
```

Now instead of writing `{ name: string, age: number, isAdmin: boolean }` again and again, we just say `User`.

### 🛠 Real-world usage:
When building a user system in a big project (e.g. social media app), you’ll have many users. You can define `type User` once and use it everywhere.

---

## ✅ 3️⃣ What is an **Interface**?

An **interface** is **almost the same as a type**, but it’s meant for **objects only** and is more powerful when you want to **extend (add more things)** later.

### 🧠 Example:

```ts
interface Product {
  name: string;
  price: number;
}

let laptop: Product = {
  name: "MacBook",
  price: 1200,
};
```

### 🔁 Extend Interface:

```ts
interface Electronic extends Product {
  warranty: number;
}

const phone: Electronic = {
  name: "iPhone",
  price: 999,
  warranty: 1,
};
```

### 🛠 Real-world usage:
You build a project like an **ecommerce app**. `Product` is your base. Later, you create new types like `Electronic`, `Clothing`, etc. by extending it.

---

## 🤔 Type vs Interface — What's the Difference?

| Feature         | `type`                           | `interface`                     |
|-----------------|----------------------------------|----------------------------------|
| Use for         | Any type (primitives, unions...) | Mostly for object shapes         |
| Extendable      | ✅ Yes (via `&`)                 | ✅ Yes (via `extends`)           |
| Preferred when  | You need flexibility             | You build object blueprints      |

👉 In real-world:  
Use `interface` for **objects and classes**, and `type` when you need **unions, primitives, arrays**, etc.

---

## 🏁 Final Example for All 3 Together:

```ts
type Age = number;

interface User {
  name: string;
  age: Age;
  isAdmin: boolean;
}

const newUser: User = {
  name: "Arif",
  age: 25,
  isAdmin: false,
};
```

---

## ✨ Summary (Like Flashcards):

- **Type Annotation** = Labeling variable types (`: string`, `: number`)
- **Type** = Custom type (like `User`, `Post`, `Product`)
- **Interface** = Object blueprint (great for extending in large apps)

---

