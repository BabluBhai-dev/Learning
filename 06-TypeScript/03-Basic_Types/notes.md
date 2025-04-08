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

