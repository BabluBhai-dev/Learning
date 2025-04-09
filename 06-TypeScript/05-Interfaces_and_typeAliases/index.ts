//interface

interface person{
    name:string;
    age:number;
}

const arif:person = {
    name:"Arif",
    age:25
}

//using Interfaces to define object shapes

interface family{
    dad:string;
    mom:string;
    kid:number;
}

const myFamily :family={
    dad:"john",
    mom:"jane",
    kid:2
};

//Type Aliases

type ID = string;
type Age = number;

let userId: ID = "abc123";
let userAge: Age = 25;

console.log(userId,userAge);

//Intersection Types — (Mixing Two Types ➕)

type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const user: Person = {
  name: "Arif",
  age: 25
};

//union Type

type Status = "success" | "error" | "loading";

let responseStatus: Status = "success";
responseStatus = "loading"; // ✅
