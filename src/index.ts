const rollno:number=16;
console.log(rollno);


// to make union variable

let surname:string | number;

surname=123


// to make custom type for variables and functions

type Username=(n:string ,m:string)=>string;

const func:Username=(n,m)=>{
    console.log(n,m);
    return n+m;
};


// to make array homogeneous

const arr:Array<Number>=[20,30,40];

//tuple in typescript

const outtuple:[number,string,boolean]=[12,"atul",true];



