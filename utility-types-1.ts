


interface MyUser {
    name:string;
    id:string;
    email?:string;
}

interface MyUserOptionals{
    name?:string;
    id?:string;
    email?:string;
}

const merge = (user:MyUser,overrides:MyUserOptionals):MyUser=>{
    return {
        ...user,
        ...overrides
    }
}

console.log(merge({
    name:"Jack",
    id:"Foo",
    email:"dontemail@dontemail.com"
},{email:"dontemailssssssss@dontemail.com"}))

