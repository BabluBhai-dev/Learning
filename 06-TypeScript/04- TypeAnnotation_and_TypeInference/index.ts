//TypeAnnotation

let age:number =10;
let name:string ="Arif";
let isCool :boolean=true;

console.log(`${age}${name}${isCool}`);

//type

type user ={
    name:string;
    age:number;
    isAdmin:boolean;
};
let user1:user={
    name:"Arif",
    age:25,
    isAdmin:true,
};

//Interface

interface Product {
    name: string;
    price: number;
  }
  
  let laptop: Product = {
    name: "MacBook",
    price: 1200,
  };

 //Extend Interface
 
 interface Electronic extends Product {
    warranty: number;
  }
  
  const phone: Electronic = {
    name: "iPhone",
    price: 999,
    warranty: 1,
  };
  