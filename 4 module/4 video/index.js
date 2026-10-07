"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #35. Type in generic
function copy(obj) {
    return { ...obj };
}
const person = { id: 1, name: 'Ali' };
const clone = copy(person);
console.log(clone);
// T extends ... => T faqat ma'lum shartga javob berishi kerak.
//# sourceMappingURL=index.js.map