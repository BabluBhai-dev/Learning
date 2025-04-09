# 🌟 Interfaces and Type Aliases

---

## ✅ 1. **Defining Interfaces** — (Object Blueprints 🧱)

Think of an **interface** like a **form** or **template** for how an object should look.

### 🔤 Example:
```ts
interface Person {
  name: string;
  age: number;
}
```

This says: any object that is a `Person` must have:
- a `name` (text)
- an `age` (number)

### ✅ Use:
```ts
const arif: Person = {
  name: "Arif",
  age: 25
};
```

> 🧠 **Project Use:** When you're working with **users, posts, products**, etc., interfaces make sure your objects have the correct structure.

---

## ✅ 2. **Using Interfaces to define Object Shapes**

You can use interfaces to describe more complex shapes, like:

### 👨‍👩‍👧‍👦 Example:
```ts
interface Family {
  dad: string;
  mom: string;
  kids: number;
}
const myFamily: Family = {
  dad: "John",
  mom: "Jane",
  kids: 2
};
```

---

## ✅ 3. **Extending Interfaces** — (Like Inheritance 👑)

You can **add more rules** to an interface by extending it.

### 🧠 Example:
```ts
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
const myDog: Dog = {
  name: "Tommy",
  breed: "Labrador"
};
```

> 🧠 **Project Use:** Useful in a project like an **e-commerce app** where you start with a `Product` and later create specific types like `Electronics`, `Books`, etc.

---

## ✅ 4. **Type Aliases** — (Like Giving a Nickname 🏷)

A **type alias** is used to create a new **name** for any type (not just objects).

### 🧠 Example:
```ts
type ID = string;
type Age = number;

let userId: ID = "abc123";
let userAge: Age = 25;
```

You can also use it for objects:

```ts
type Car = {
  brand: string;
  year: number;
};
```

---

## ✅ 5. **Intersection Types** — (Mixing Two Types ➕)

It’s like combining two interfaces or types into one.

### 🧠 Example:
```ts
type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const user: Person = {
  name: "Arif",
  age: 25
};
```

> 🧠 **Project Use:** When you want to combine types from multiple places.

---

## ✅ 6. **Union Types** — (This OR That 🔀)

It allows a variable to be one of many types.

### 🧠 Example:
```ts
type Status = "success" | "error" | "loading";

let responseStatus: Status = "success";
responseStatus = "loading"; // ✅
```

> 🧠 **Project Use:** When dealing with things like **API status**, **form inputs**, etc.

---

## ✅ 7. **Reference (When to use what?)**

| Use Case                 | Use `interface` 🧱        | Use `type` 🏷               |
|--------------------------|---------------------------|------------------------------|
| Objects/Classes          | ✅ Yes                    | ✅ Yes                       |
| Extend/Inheritance       | ✅ Built-in support       | ✅ With `&`                  |
| Combine Multiple Types   | ❌ Not directly            | ✅ Yes (intersection `&`)    |
| Primitives/Unions        | ❌ Not allowed             | ✅ Yes (`string | number`)   |
| React Props              | ✅ Preferred               | ✅ Works                     |

---

## 📁 Example Project Use:
Imagine you're building a **User Dashboard App**.

### You’d use:
- `interface User` → to define how the user object looks
- `type UserID = string` → for giving nickname to types
- `type APIStatus = "loading" | "error" | "success"` → union
- `type FullUser = User & { role: string }` → intersection

