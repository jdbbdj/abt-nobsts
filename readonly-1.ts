interface Cat {
    name:string;
    breed:string;
}

//this makes the Cat to be read only
type ReadOnlyCat = Readonly<Cat>

const makeCat = (name:string,breed:string):ReadOnlyCat=>{
    return {
        name,
        breed
    }
}

const usul = makeCat("Usul","Tabby")



console.log(usul)


const makeCoordinate = (x:number,y:number,z:number):readonly[number,number,number]=>{
    return [x,y,z]
}

const c1 = makeCoordinate(10,20,30);

console.log(c1)

//really const

const reallyConst = [1,2,3];
reallyConst[0]=50

//array immmutability

const reallyConst2 = [1,2,3] as const;
