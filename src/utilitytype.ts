//Partial<Type>

// type user={
//     name:string,
//     email:string
// }

// type  user2=Partial<user>

//it gives optional to declare properties


//required<Type>  opposite of partial

// type user={
//     name:string,
//     email:string
// }


// const newuser:Required<user>={
//     name:"atul",
//     email:"atul@gmail.com"
// }


//readonly

// type User={
//      name:string,
//      email:string
// }

// type User2=Readonly<User>



// const user:User2={
//     name:"atul",
//     email:"atul@gmail.com"
// }


//record

// type User={
//     name:string,
//     email:string
// };

// type user2=Record<"name"|"email"|"gender",string>

//example

// interface userinfo{
//     age:number;
// }

// type username="john"|"andrew"|"elon";

// const users:Record<username,userinfo>={
//     john:{
//         age:32
//     },
//     andrew:{
//         age:32
//     },
//     elon:{
//         age:32
//     }
// }


//Pick<Type,Keys>

// interface orderinfo{
//     readonly id:string,
//     user:string,
//     city:string,
//     state:string,
//     country:string,
//     status:string
// }

// type shippinginfo=Pick<orderinfo,"city"|"state"|"country">


// Omit<Type,Keys>

// interface orderinfo{
//     readonly id:string,
//     user:string,
//     city:string,
//     state:string,
//     country:string,
//     status:string
// }

// type shippinginfo=Omit<orderinfo,"city"|"state"|"country">


//Exclude<Type,ExcludeUnion>
//type MyUnion =string | Number | boolean
//type Random=Exclude<Myunion,boolean>

//Extract<Type,Union>
// type MyUnion =string | Number | boolean
// type Random=Extract<MyUnion,boolean>

// //Non nullable
// type MyUnion =string | Number | boolean | null | undefined;
// type Random=NonNullable<MyUnion>


//Parameter type

const myfun=(a:number,b:string)=>{
    console.log(a+b);
    
}

type random=Parameters<typeof myfun>