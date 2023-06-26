
//tuple is an array with name and type
type ThreeDCoordinate =[x:number,y:number,z:number];

const addThreeCoordinate = (c1:ThreeDCoordinate,c2:ThreeDCoordinate):ThreeDCoordinate=>{
    return [
        c1[0]+c2[0],
        c1[1]+c2[1],
        c1[2]+c2[2]
    ]
}

console.log(addThreeCoordinate([0,100,0],[10,20,30]))

//but as a react engineer we are encountering tuples as data inside useState

const simpleStringState = (initial:string):[()=>string,(v:string)=>void]=>{
    let str:string = initial;
    return [
        ()=>str,
        (v:string)=>{
            str=v
        }
    ]
}

const [str1Getter,str1Setter]=simpleStringState("hello")

console.log(str1Getter());
str1Setter("hey");
console.log(str1Getter());

const [str2Getter,str2Setter]=simpleStringState("heys")
console.log(str2Getter());
str2Setter("heyssssss");
console.log(str2Getter());