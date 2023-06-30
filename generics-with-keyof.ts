

const pluck =<DataType,KeyType extends keyof DataType> (items:DataType[], key:KeyType):DataType[KeyType][] =>{
    return items.map(item=>item[key])
}


const dog = [
    {name:"Mimi", age:12},
    {name:"Mieow", age:14},
]


console.log(pluck(dog,"name"))


interface BaseEvent {
    time: number;
    user:string;
}

interface EventMap{
    addToCart: BaseEvent & {quantity: number; productID: string;}
    checkout: BaseEvent
}

const sendEvent =<Name extends keyof EventMap> (name:Name,data:EventMap[Name]):void =>{
    console.log([name,data])
}

sendEvent("addToCart",{productID:"foo",user:"baz",quantity:1,time:10})
sendEvent("checkout",{user:"baz",time:10})
