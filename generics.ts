
const genericUseState = <T>(initial:T):[()=>T,(v:T)=>void]=>{
    let val:T = initial;
    return [
        ()=>val,
        (v:T)=>{
            val=v
        }
    ]
}

const [user,setUser]=genericUseState(1)

console.log(user());
setUser(62);
console.log(user());

//override the T
const [users,setUsers]=genericUseState<string|null>(null)

console.log(users());
setUsers("str");
console.log(users());