//classes

class Player{
   private height;
   private weight;


    constructor(height:number,weight:number){
        this.weight=weight;
        this.height=height;
    }
}

const abhi=new Player(30,40);


//Type Assertion

// const btn=<HTMLElement>document.getElementById('btn');

const btn=<HTMLElement>document.getElementById('btn')!;

btn.onclick



interface Person{
    [key:string]:string,
}

const person1:Person={
    name:"abhi",
    email:"abhi@gmal.com"
}

const getName=():string=>{
    return person1.name;
}

const getemail=():string=>{
    return person1.email;
}


const getdataperson=(key:string):string=>{
    return person1[key];
}

console.log(getdataperson("name"));


