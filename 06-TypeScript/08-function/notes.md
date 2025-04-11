## 🍭 1️⃣ What is a Function in TypeScript?

A **function** is like a mini-machine 🛠️ that you give **input (parameters)** and it gives you **output (return)**.

In TypeScript, we can also tell what types the inputs and output should be.

---

## 📘 Subtopics:

---

### 1. **Function Types**

A function type tells:
- what types of inputs it takes,
- and what type it returns.

### ✨ Example:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

👶🏻 Like:  
I’m saying: "This function takes two **numbers** and gives back a **number**."

You can also define a function type:

```ts
let greet: (name: string) => void;

greet = (name) => {
  console.log("Hello", name);
};

greet("Arif"); // Hello Arif
```

---

### 2. **Optional and Default Parameters**

- **Optional**: You can skip it.
- **Default**: It has a backup value if you don’t pass anything.

```ts
function greetUser(name: string, age?: number) {
  console.log("Hi", name);
  if (age) {
    console.log("You are", age, "years old.");
  }
}

greetUser("Arif");
greetUser("Ali", 25);

// ✅ Default
function sayHello(name: string = "Guest") {
  console.log("Hello", name);
}

sayHello(); // Hello Guest
sayHello("Arif"); // Hello Arif
```

---

### 3. **Rest Parameters**

When you don’t know how many values someone will pass, you use **rest `...`**.

```ts
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100
```

It’s like a basket 🎒 to collect many numbers.

---

### 4. **Function Overloads**

When a function can work in different ways based on input types.

```ts
function greetPerson(name: string): string;
function greetPerson(age: number): string;
function greetPerson(input: string | number): string {
  if (typeof input === "string") {
    return `Hello ${input}`;
  } else {
    return `You are ${input} years old`;
  }
}

console.log(greetPerson("Arif")); // Hello Arif
console.log(greetPerson(25)); // You are 25 years old
```

🧠 You tell TypeScript “this function can accept multiple different shapes/types”.

---

## 💻 Real-World Project Use

Let’s say you are building a **shopping cart**:

```ts
function calculateTotal(price: number, quantity: number = 1): number {
  return price * quantity;
}

function checkout(user: string, ...items: string[]) {
  console.log(`Checking out for ${user}:`);
  console.log("Items:", items.join(", "));
}

checkout("Arif", "Shirt", "Jeans", "Shoes");
```

You used:
- 🟢 Function Types
- 🔵 Default parameter
- 🟣 Rest parameters

---

## 🧠 Summary

| Concept                 | Meaning                                                                 |
|-------------------------|-------------------------------------------------------------------------|
| Function Types          | Describe input/output types for a function                              |
| Optional Parameters     | Parameter is not required (use `?`)                                     |
| Default Parameters      | If nothing is passed, use a default value                               |
| Rest Parameters         | Accept many values as a single array using `...`                        |
| Function Overloads      | Define multiple behaviors of a function for different input types       |

