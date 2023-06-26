const printIngredient: (quantity: string, ingredient: string,extra?:string) => void = (quantity:string,ingredient:string)=>{
     console.log(`${quantity} ${ingredient}`)
}


// the extra?: string will be the determinator for optional
//if you put extra without question mark the two param arguments will error
//if you remove the whole extra param the 3 param argument will error
//you cant put another required param after the optional one


printIngredient("5","garlic")
printIngredient("5","garlic","something more")