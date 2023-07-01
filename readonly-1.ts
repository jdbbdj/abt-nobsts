interface Cat {
    name:string;
    breed:string;
}

const makeCat = (name:string,breed:string):Cat=>{
    return {
        name,
        breed
    }
}

const usul = makeCat("Usul","Tabby")

usul.name="Peter"

console.log(usul)