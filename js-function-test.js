const {getName} = require("./misconception")

//use npx tsc misconception.ts
//it converts your ts module to js module to be used

console.log(getName({
    first:"a",
    last:"b"
}))

console.log(getName())