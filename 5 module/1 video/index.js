"use strict";
// #44. Decorator pattern
// Decorator pattern - mavjud class yoki metodga qo'shimcha xususiyat qo'shish usuli.
// Decorator @ belgisi bilan yoziladi va class yaratilganda ishga tushadi.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Sealed(Constructor) {
    Object.seal(Constructor);
    Object.seal(Constructor.prototype);
    return Constructor;
}
let Lesson44User = class Lesson44User {
    name;
    constructor(name) {
        this.name = name;
    }
};
Lesson44User = __decorate([
    Sealed
], Lesson44User);
const user = new Lesson44User('Ali');
console.log(user.name);
//# sourceMappingURL=index.js.map