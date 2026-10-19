"use strict";
// #45. Class decorator
// Class decorator class yaratilayotganda unga qo'shimcha xususiyat qo'shadi.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function WithVersion(Constructor) {
    Object.defineProperty(Constructor, 'version', { value: 1 });
}
let Lesson45Service = class Lesson45Service {
    static version = 0;
    getMessage() {
        return 'Xizmat tayyor';
    }
};
Lesson45Service = __decorate([
    WithVersion
], Lesson45Service);
console.log(Lesson45Service.version);
console.log(new Lesson45Service().getMessage());
//# sourceMappingURL=index.js.map