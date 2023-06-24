

// typescript enforce types on compile time, not in run time
export const getName = (user:{first:string;last:string;}):string=>{
    return `${user?.first??"first"} ${user?.last??"last"}`
}