"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 7. Generics
// Generic function, class yoki component turli turlar bilan ishlaydi.
// any ishlatilsa, qaytariladigan qiymatning aniq turi yo'qoladi.
function identity(value) {
    return value;
}
// Generic chaqirilganda tur argumentdan aniqlanishi mumkin.
const lessonAge = identity(26);
const lessonName = identity('Ulugbek');
console.log(lessonAge, lessonName);
// extends generic turga cheklov qo'yadi.
class ShoppingCart {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}
// Generic function va class kodni qayta ishlatishga yordam beradi.
//# sourceMappingURL=index.js.map