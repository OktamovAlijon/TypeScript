"use strict";
// #49. Decorator cache & Parameter
// Cache decorator metod natijasini bir xil argumentlar uchun qayta ishlatadi.
// Parameter decorator parametr e'lon qilinganda uning tartib raqamini ko'rsatadi.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
function Cache(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    if (typeof originalMethod !== 'function') {
        throw new TypeError(`${String(methodName)} metod bo'lishi kerak`);
    }
    const results = new Map();
    descriptor.value = function (...args) {
        const key = args.join('|');
        if (results.has(key)) {
            console.log('Cache natijasi olindi');
            return results.get(key);
        }
        const result = originalMethod.apply(this, args);
        results.set(key, result);
        return result;
    };
}
function LogParam(target, methodName, parameterIndex) {
    console.log(`${String(methodName)} metodidagi ${parameterIndex}-parametr`);
}
class Lesson49Calculator {
    multiply(a, b) {
        console.log('Hisoblayapman...');
        return a * b;
    }
}
__decorate([
    Cache,
    __param(0, LogParam)
], Lesson49Calculator.prototype, "multiply", null);
const calculator = new Lesson49Calculator();
console.log(calculator.multiply(4, 5));
console.log(calculator.multiply(4, 5));
//# sourceMappingURL=index.js.map