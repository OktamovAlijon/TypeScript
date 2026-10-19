"use strict";
// #40. Pick, Omit, Extract, Exclude
// Pick - type ichidan kerakli propertylarni tanlaydi.
// Omit - type ichidan ko'rsatilgan propertylarni olib tashlaydi.
// Extract - union ichidan mos turlarni tanlaydi.
// Exclude - union ichidan ko'rsatilgan turlarni olib tashlaydi.
Object.defineProperty(exports, "__esModule", { value: true });
const userName = { name: 'Ali' };
const userWithoutEmail = { name: 'Vali', age: 22 };
const text = 'Salom';
const value = 42;
console.log(userName, userWithoutEmail, text, value);
//# sourceMappingURL=index.js.map