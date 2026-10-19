"use strict";
// #41. ReturnType, Parameters, Awaited
// ReturnType - funksiya qaytaradigan qiymat turini oladi.
// Parameters - funksiya parametrlarining turlarini tuple qilib oladi.
// Awaited - Promise ichidagi qiymat turini oladi.
Object.defineProperty(exports, "__esModule", { value: true });
function lesson41User(name, age) {
    return { name, age };
}
const userArguments = ['Ali', 20];
const userResult = lesson41User(...userArguments);
console.log(userResult);
//# sourceMappingURL=index.js.map