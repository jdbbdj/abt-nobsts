//FUNCTIONS AND TYPESCRIPT


//if a and b arent stated as a certain type
//it would be stated as ANY
//ANY is something we are trying to avoid
//we want to control the types and specify it
const addNumbers=(a:number,b:number)=>{
    return a+b
}


export const addStrings=(str1:string,str2:string):string=>{
    return `${str1} ${str2}`
}

export const addStringsDefaultParams=(str1:string,str2:string="siopao"):string=>{
    return `${str1} ${str2}`
}

//union types
export const format = (title:string, param:string|number): string => {
    return `${title} ${param}`
}
//void a function that doesnt return 
export const print = (title:string, param:string|number): void =>{
    console.log(format(title,param))
}

//promise
export const fetchData = (url:string):Promise<string> => Promise.resolve(`Data from ${url}`)

//dot seperator as props
export const introduce = (salutation:string,...names:string[]):string=>{
    return `${salutation} ${names.join(" ")}`
}






export default addNumbers