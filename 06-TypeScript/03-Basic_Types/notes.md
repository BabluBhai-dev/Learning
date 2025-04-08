## ✅ Introduction to **Basic Types** in TypeScript

---

### 🧠 What are Basic Types?

Basic types are used to tell **what kind of data** a variable will hold.

It's like telling TypeScript:  
> “Hey! This variable will only store a number.”  
> “This one? Only text!”  

This helps TypeScript catch mistakes before running the code.

---

### ✨ List of Basic Types

| Type       | What it stores             | Example                  |
|------------|----------------------------|--------------------------|
| `number`   | Any number (int, float)    | `let age: number = 25;`  |
| `string`   | Text data                  | `let name: string = "Arif";` |
| `boolean`  | true or false              | `let isLoggedIn: boolean = true;` |
| `null`     | Empty value                | `let data: null = null;` |
| `undefined`| Not yet assigned           | `let temp: undefined = undefined;` |
| `any`      | Any value (turns off type checking) ⚠️ | `let value: any = "Hello";` |
| `unknown`  | Like `any`, but safer       | `let result: unknown = 10;` |

---

### 🛒 Real Project Example — E-commerce Site

Let’s say you're working on a **product card**:

```ts
let productName: string = "T-Shirt";
let productPrice: number = 499.99;
let inStock: boolean = true;
```

Now TypeScript **won’t allow mistakes**, like this:

```ts
productPrice = "cheap"; // ❌ Error: should be number
```

✅ This avoids bugs **before** running the code.

---

### 📍 Where are Basic Types used in projects?

- Product info (name, price, availability)
- User info (name, age, isLoggedIn)
- Form inputs (email: string, age: number)
- API data types
- Conditions & logic (if something is `true` or `false`)

---

### 💡 Small Code Practice Example

```ts
let username: string = "Arif";
let age: number = 24;
let isStudent: boolean = true;

console.log(`${username} is ${age} years old. Student: ${isStudent}`);
```

---

### 📌 Usage Note:

✅ **Always used** in every TypeScript project  
These are the most commonly used types — like the ABCs of TypeScript.

---

Absolutely Arif! 💡  
I'll now explain each sub-topic from your `index.ts` file like you're 10 years old — **simple, clear, and beginner-friendly**. You'll get both the **what** and **why** behind each concept, with a real-world comparison when possible.

---

## 🎓 1️⃣ Primitive Types  
Primitive types are the **smallest and most basic building blocks** in TypeScript.  
Imagine them like simple LEGO blocks you always start with.

| Type      | What it means                    | Real-world example                      |
|-----------|----------------------------------|------------------------------------------|
| `string`  | Text                             | `"Arif"` — your name                     |
| `number`  | Numbers                          | `25` — your age                          |
| `boolean` | True or False                    | `true` — Are you logged in?             |
| `null`    | Empty on purpose                 | `null` — Nothing is stored               |
| `undefined` | Not assigned anything yet     | `undefined` — Like a blank homework page |
| `symbol`  | Unique value (like secret code) | Used to create hidden identity           |
| `bigint`  | Super large number              | For math where numbers are huge!         |

### Example from code:
```ts
let username: string = "Arif"; // text
let age: number = 25;          // number
let isLoggedIn: boolean = true; // yes/no
```

---

## 🧺 2️⃣ Arrays  
Arrays are like **buckets** that store a list of the same things.

| Example             | What it means                     |
|---------------------|-----------------------------------|
| `string[]`          | List of words/text                |
| `number[]`          | List of numbers                   |
| `Array<string>`     | Another way to say `string[]`     |

```ts
let skills: string[] = ["HTML", "CSS", "JavaScript"];
```

➡️ This is a list of skills you know, all stored in one bucket.

---

## 🧱 3️⃣ Tuples  
Tuples are **boxes that store different types in a fixed order**.

| Example                        | Explanation                                  |
|--------------------------------|----------------------------------------------|
| `["Arif", 25]`                 | First is a string (name), second is a number (age) |

```ts
let userData: [string, number] = ["Arif", 25];
```

➡️ It’s like your name tag: name + age in a set order.

---

## 🎮 4️⃣ Enums  
Enums are used to **give names to fixed values** — like game roles or menu items.

```ts
enum UserRole {
  ADMIN,   // 0
  EDITOR,  // 1
  VIEWER   // 2
}
let myRole: UserRole = UserRole.EDITOR;
```

➡️ Instead of using numbers or strings, we use words like `ADMIN`.

---

## 🎩 5️⃣ Any  
`any` means **TypeScript won’t check your type** — anything goes.

```ts
let randomValue: any = "Hello";
randomValue = 10;
randomValue = true;
```

➡️ It’s like saying: “Hey TypeScript, trust me, I got this!”  
⚠️ Not safe for big projects.

---

## 🛡️ 6️⃣ Unknown  
`unknown` is like `any`, but **TypeScript is careful** — it checks before using.

```ts
let userInput: unknown = "TypeScript";

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}
```

➡️ Like a surprise gift: You have to **unwrap** it before using it.

---

## 👋 7️⃣ Void  
`void` means the function **doesn’t return anything**, it just **does** something.

```ts
function greetUser(): void {
  console.log("Welcome to TypeScript!");
}
```

➡️ It’s like waving hello. You don’t give back anything — just say hi.

---

## 🕳️ 8️⃣ Null  
`null` means something is **intentionally empty**.

```ts
let middleName: null = null;
```

➡️ Like saying: “I don’t have a middle name.”

---

## 🕸️ 9️⃣ Undefined  
`undefined` means you **haven’t given any value yet**.

```ts
let jobTitle: undefined = undefined;
```

➡️ Like a blank space waiting to be filled.

---

## 💥 🔟 Never  
`never` means this function will **never finish**. It either crashes or runs forever.

```ts
function throwError(): never {
  throw new Error("Something went wrong!");
}
```

➡️ It’s like pulling the fire alarm — everything stops!

---

### 🧠 Quick Summary Chart:

| Topic        | What It Is                      | Real-Life Example                      |
|--------------|----------------------------------|----------------------------------------|
| `string`     | Text                            | Your name                              |
| `number`     | Numbers                         | Your age                               |
| `boolean`    | True/False                      | Are you logged in?                     |
| `null`       | Empty on purpose                | No middle name                         |
| `undefined`  | Not set yet                     | Empty input field                      |
| `symbol`     | Unique secret value             | ID badge                               |
| `bigint`     | Huge number                     | Population counter                     |
| `array`      | List of items                   | Shopping list                          |
| `tuple`      | Ordered mixed values            | ["Arif", 25]                            |
| `enum`       | Named roles/states              | ADMIN, EDITOR, VIEWER                  |
| `any`        | Anything (not safe)             | Wild card                              |
| `unknown`    | Anything (must check first)     | Mystery box                            |
| `void`       | No return                       | Saying hello                           |
| `never`      | Crashes or infinite loop        | Fire alarm or endless loading          |

---

