"use strict";
// #39. Readonly, Partial, Required
// Readonly - propertylarni o'zgarmas qiladi.
// Partial - barcha propertylarni ixtiyoriy qiladi.
// Required - barcha propertylarni majburiy qiladi.
Object.defineProperty(exports, "__esModule", { value: true });
const userInfo = { name: 'Ali', age: 20 };
const userUpdate = { age: 21 };
const completeUser = { name: 'Vali', age: 25 };
console.log(userInfo, userUpdate, completeUser);
//# sourceMappingURL=index.js.map