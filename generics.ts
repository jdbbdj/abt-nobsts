
const genericUseState = <T>(initial:T):[()=>T,(v:T)=>void]=>{
    let val:T = initial;
    return [
        ()=>val,
        (v:T)=>{
            val=v
        }
    ]
}

const [user,setUser]=genericUseState("hello")

console.log(user());
setUser("hey");
console.log(user());