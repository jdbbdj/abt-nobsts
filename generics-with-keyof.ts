

const pluck =<DataType,KeyType extends keyof DataType> (items:DataType[], key:KeyType):DataType[KeyType][] =>{
    return items.map(item=>item[key])
}


const dog = [
    {name:"Mimi", age:12},
    {name:"Mieow", age:14},
]


console.log(pluck(dog,"name"))