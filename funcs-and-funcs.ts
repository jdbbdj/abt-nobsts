//function as parameters

export const printToFile = (text:string, callback:()=>void):void=>{
    console.log(text);
    callback();
}


//function as type
//type vs interface
//interface can be extended by declaring it a second time
//type cannot be changed outside of its declaration
//type uses equals `=` while interface don't
export type MutationType = (v:number)=>number

//the parameter function
export const arrayMutate = (numbers:number[], mutate:MutationType):number[]=>{
    return numbers.map(mutate)
}


const myNewMutateFunc: (v: string) => string=(v:string):string=>`${v}`

//reuse type
const reuseTypeFunc:MutationType=(v:number)=>v*100

type StringType=(param1:string,param2:string)=>void
const interfaceFunc:StringType =(param1:string,param2:string):string=>{
    return `${param1} ${param2}`
}

console.log(interfaceFunc("hey","soul"))

//functions that returns functions: closure



console.log(myNewMutateFunc("hey"))
console.log(reuseTypeFunc(2))

console.log(arrayMutate([1,20,3],(v)=>v*10))