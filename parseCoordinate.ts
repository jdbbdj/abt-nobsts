interface Coordinate {
    x:number;
    y:number;
}

export const  parseCoordinateFromObject=(obj:Coordinate):Coordinate=>{
    return{
        ...obj
    }
}

export const parseCoordinateFromNumbers =(x:number,y:number):Coordinate=>{
    return{
        x,y
    }
}


function parseCoordinate(obj:Coordinate):Coordinate
function parseCoordinate(x:number,y:number):Coordinate
function parseCoordinate(v:string):Coordinate
//unknown is called a "SAFE" any
//you declare it but redeclare it inside
function parseCoordinate(arg1:unknown,arg2?:unknown):Coordinate{
    let coord:Coordinate={
        x:0,
        y:0
    }

    if(typeof arg1==="string"){
        (arg1 as string).split(',').forEach(
            str=>{
                const [key,value]=str.split(':')
                coord[key as 'x'|'y']=parseInt(value,10)
            }
        )
    } 
    
    else if(typeof arg1==='object'){
        coord = {
            ...(arg1 as Coordinate)
        }
    } else{
        coord ={
            x:arg1 as number,
            y:arg2 as number
        }
    }

    return coord;
}

console.log(parseCoordinate(1,2));
console.log(parseCoordinate({x:10,y:20}))
console.log(parseCoordinate("x:12,y:22"))