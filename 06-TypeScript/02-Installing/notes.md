## ✅ Installing and Setting Up TypeScript

---

### 🧠 What is it?

Before you write TypeScript code, you need to **install TypeScript** and set it up so your code gets converted into JavaScript (because browsers don’t understand TypeScript directly).

---

### ✨ How to Install TypeScript

You need **Node.js** installed. Then open your terminal and run:

```bash
npm install -g typescript
```

This installs TypeScript globally on your system so you can use the `tsc` command.

✅ To check if it worked:
```bash
tsc --version
```

---

### 🛠️ Setup for a Project

Let’s say you're starting a new project:

```bash
mkdir my-ts-app
cd my-ts-app
npm init -y
npm install typescript --save-dev
```

Then create a config file:

```bash
npx tsc --init
```

This creates a file called `tsconfig.json` which controls how TypeScript works in your project.

---

### 🗂️ Folder Structure

```
my-ts-app/
│
├── index.ts          ← Your TypeScript file
├── tsconfig.json     ← TypeScript config
└── node_modules/
```

To compile your code (convert `.ts` → `.js`):

```bash
npx tsc
```

It creates:

```
index.js  ← Converted JavaScript
```

---

### 🛒 Real Project Example — E-commerce Website

Let’s say you’re building an online store.

- You’ll write your code in `index.ts`
- You’ll use TypeScript to make sure your **product prices**, **cart items**, and **user data** are the correct types
- TypeScript will convert it to `index.js`, which the browser understands

---

### 📍 Where this is used in the project:

- Every TypeScript project starts with this setup
- You’ll run `npx tsc` to compile your code into real working JavaScript
- You can now safely start building your project with **type safety**

---

### 📌 Usage Note:

✅ **Always used in TypeScript projects**  
This is the first step before writing any TypeScript code.

---

