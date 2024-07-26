type functype=(n:number,m:number,l?:number)=>number;

const func2:functype=(n,m,l)=>{
    if(typeof l === "undefined") return n * m;

    return n*m*l;
}

func2(1,2);


//Rest operator

// type functiontype=(...m:number[])=>number[];

// const func3:functiontype=(...m)=>{
//     return m;
// };

// func3(25,20,30,40);


//function with object

interface Product{
    name:string,
    stock:number,
    price:number,
    photo:string;
}


type GetDataType =(product :Product)=>void;

const getdata:GetDataType=(product)=>{
    console.log(product); 
}

const productone:Product={
    name:"macbook",
    stock:40,
    price:3000,
    photo:"sampleproduct",
};

getdata(productone);


// type alias extended

type College={
    name:string;
}

type Collegelocation =College & {
    indelhiNcr:boolean;
}

