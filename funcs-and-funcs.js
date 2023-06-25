"use strict";
//function as parameters
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayMutate = exports.printToFile = void 0;
var printToFile = function (text, callback) {
    console.log(text);
    callback();
};
exports.printToFile = printToFile;
//the parameter function
var arrayMutate = function (numbers, mutate) {
    return numbers.map(mutate);
};
exports.arrayMutate = arrayMutate;
var myNewMutateFunc = function (v) { return "".concat(v); };
//reuse type
var reuseTypeFunc = function (v) { return v * 100; };
var interfaceFunc = function (param1, param2) {
    return "".concat(param1, " ").concat(param2);
};
console.log(interfaceFunc("hey", "soul"));
//functions that returns functions: closure
console.log(myNewMutateFunc("hey"));
console.log(reuseTypeFunc(2));
console.log((0, exports.arrayMutate)([1, 20, 3], function (v) { return v * 10; }));
