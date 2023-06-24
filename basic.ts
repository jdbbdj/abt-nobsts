let userName: string = "Jack"
let hasLoggedIn: boolean = true

userName += " Herrington"

console.log(userName)


//number

let myNumber: number = 10

let myRegex: RegExp = /foo/

const names:string[] = userName.split(" ")

//generic
const myValues:Array<number>=[1,2,3]

//objects

const myPerson: {
    first: string;
    last: string;
    cool:number
} = {
    first: "Jack",
    last: "Herrington",
    cool:1
}
// making it dynamic

interface Persona {
    first:string;
    last:string;
}

const myPersona:Persona={
    first:"hey",
    last:"soul"
}


//objects as maps
const ids:Record<number,string> = {
    10:"a",
    20:"b"
}

ids[30]="c"

//conditionals
if(ids[30]=== "D"){

}

//loops

//inferred let typescript do it for you
for(let i =0;i<10;i++){
    console.log(i)
}

[1,2,3].forEach((v)=>console.log(v))

const out = [4,5,6].map((v)=>v*10)
//API handling