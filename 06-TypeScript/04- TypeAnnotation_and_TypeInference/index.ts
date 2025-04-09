//TypeAnnotation

let age2:number =10;
let name2:string ="Arif";
let isCool :boolean=true;

console.log(`${age2}${name2}${isCool}`);

//type

type user ={
    name3:string;
    age3:number;
    isAdmin:boolean;
};
let user1:user={
    name3:"Arif",
    age3:25,
    isAdmin:true,
};

//Interface

interface Product {
    name4: string;
    price: number;
  }
  
  let laptop: Product = {
    name4: "MacBook",
    price: 1200,
  };

 //Extend Interface
 
 interface Electronic extends Product {
    warranty: number;
  }
  
  const phone: Electronic = {
    name4: "iPhone",
    price: 999,
    warranty: 1,
  };
  