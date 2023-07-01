interface Cat {
    name:string;
    breed:string;
}

//this makes the Cat to be read only
type ReadOnlyCat = Readonly<Cat>

const makeCat = (name:string,breed:string):Cat=>{
    return {
        name,
        breed
    }
}

const usul = makeCat("Usul","Tabby")

usul.name="Peter"

console.log(usul)