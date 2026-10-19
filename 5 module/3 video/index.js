"use strict";
// #46. CreatedAt decorator
// Property decorator property e'lon qilinganda ishga tushadi.
// createdAt qiymati esa yangi obyekt yaratilganda Date.now() orqali olinadi.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function CreatedAt(target, propertyKey) {
    console.log(`${String(propertyKey)} property decorator bilan belgilandi`);
}
class Lesson46Post {
    title;
    createdAt = new Date();
    constructor(title) {
        this.title = title;
    }
}
__decorate([
    CreatedAt
], Lesson46Post.prototype, "createdAt", void 0);
const post = new Lesson46Post('TypeScript');
console.log(post.title, post.createdAt);
//# sourceMappingURL=index.js.map