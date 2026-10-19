"use strict";
// #42. Mixin
// Mixin - classga qo'shimcha imkoniyatni alohida funksiya orqali qo'shadi.
Object.defineProperty(exports, "__esModule", { value: true });
function WithTimestamp(Base) {
    return class extends Base {
        createdAt = new Date();
    };
}
class Lesson42Product {
    name;
    constructor(name) {
        this.name = name;
    }
}
const TimestampedProduct = WithTimestamp(Lesson42Product);
const product = new TimestampedProduct('Kitob');
console.log(product.name, product.createdAt);
//# sourceMappingURL=index.js.map