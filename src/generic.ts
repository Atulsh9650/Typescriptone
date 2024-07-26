//Generics

// const printn =<T>(n:T):T=>{
//     return n;
// }

// const ans=printn(5);
// const ans1=printn("6");

// type Personn={
//     name:string,
//     age:number
// }

// const person2:Personn={
//   name:"atul",
//   age:24
// }

// const ans2=printn<Personn>(person2);


// const numarr:number[]=[1,2,3];

// const numarr2:Array<number>=[]


// const func5=<T,U>(n : T, o : U):{n : T, o : U}=>{
//     return {n,o}
// }

// const anss=func5<number,string>(20,"lol");

//example

type Personnn={
    name:string,
    age:number
}

const userss:Personnn[]=[
    {
        name:"atul",
        age:22
    },
    {
        name:"abhi",
        age:22
    },{
        name:"atul",
        age:25
    },{
        name:"sumit",
        age:22
    },
]

const filterbykey=<T,U extends keyof T>(
    arr:T[],
    property:U,
    value:T[U]
):T[]=>{
   return arr.filter((item)=>item[property]=== value);
}

const filterednames=filterbykey(userss,"name","atul");

const filteredage=filterbykey(userss,"age",22);


console.log(filterednames);
console.log(filteredage);
