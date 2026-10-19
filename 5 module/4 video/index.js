"use strict";
// #47. Method decorator
// Method decorator metod chaqirilishidan oldin qo'shimcha amal bajarishi mumkin.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function LogCall(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    if (typeof originalMethod !== 'function') {
        throw new TypeError(`${String(methodName)} metod bo'lishi kerak`);
    }
    descriptor.value = function (...args) {
        console.log(`${String(methodName)} metodi chaqirildi`, args);
        return originalMethod.apply(this, args);
    };
}
class Lesson47Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    LogCall
], Lesson47Calculator.prototype, "add", null);
console.log(new Lesson47Calculator().add(2, 3));
//# sourceMappingURL=index.js.map