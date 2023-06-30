//this is the typescript for overriding data as params
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//we forgot to declare all as optionals
// interface OverridesOptionals {
//     name?:string;
//     id?:string;
//     //this is an optional type we could put ? as optional
//     email?:string;
// }
//now we make a very useful syntax in typescript
//Partial
//this would do the overrideoptional type as listener to the original type/interface
var merge = function (user, overrides) {
    //declaring arrow function in typescript
    //will result error without returning anything
    return (__assign(__assign({}, user), overrides));
};
console.log(merge({ name: "James", id: "Tutorials", email: "typescript@gmail.com" }, {
    email: "thisisoverride@gmail.com"
}));
var requiredFunction = function (name, id, email) {
    return ({ name: name, id: id, email: email });
};
var pickFunction = function (name, id) {
    return ({ name: name, id: id });
};
//Record
var mapById = function (users) {
    return users.reduce(function (a, v) {
        var _a;
        return __assign(__assign({}, a), (_a = {}, _a[v.id] = v, _a));
    }, {});
};
console.log(mapById([{ id: "foo", name: "Mr. Foo" }, { id: "Baz", name: "Mrs. Baz" }]));
