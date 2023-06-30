//this is the typescript for overriding data as params

//declare a type/interface
//interface could be redeclared types couldnt be
//type has equals

interface MyUser {
    name:string;
    id:string;
    //this is an optional type we could put ? as optional
    email?:string;
}


//we forgot to declare all as optionals
// interface OverridesOptionals {
//     name?:string;
//     id?:string;
//     //this is an optional type we could put ? as optional
//     email?:string;
// }

//now we make a very useful syntax in typescript
//Partial

const merge = (user:MyUser,overrides:Partial<MyUser>):MyUser=>{
    //declaring arrow function in typescript
    //will result error without returning anything

    return ({
        ...user,
        ...overrides
    })
}

console.log(merge({name:"James",id:"Tutorials",email:"typescript@gmail.com"},{
    email:"thisisoverride@gmail.com"
}))