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
//this would do the overrideoptional type as listener to the original type/interface
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


//Required Generics
//if we use this all of the key in original interface would be required when used
type RequiredMyUser = Required<MyUser>
const requiredFunction = (name:string,id:string,email:string):RequiredMyUser=>{
    return ({name,id,email})
}
//Pick
//Constructs a type by picking the set of properties(string literal or union of string literals) from Type
//only requires stated keys
type PickMyUser = Pick<MyUser,"name"|"id">

const pickFunction = (name:string,id:string):PickMyUser=>{
    return ({name,id})
}


//Record

const mapById = (users:MyUser[]):Record<string,MyUser>=>{
    return users.reduce((a,v)=>{

        return {
            ...a,
            [v.id]:v
        }
    },{})
}

// console.log(mapById([{id:"foo",name:"Mr. Foo"},{id:"Baz",name:"Mrs. Baz"}]))