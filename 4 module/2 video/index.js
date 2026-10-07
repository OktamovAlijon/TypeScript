"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #33. Generic function
function log(value) {
    console.log(value);
    return value;
}
const user = log({ name: 'Ali', age: 20 });
const id = log(77);
const word = log('Hello');
console.log(user.name, id, word.toUpperCase());
//# sourceMappingURL=index.js.map