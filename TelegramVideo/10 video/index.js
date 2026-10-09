"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 10. Debugging
// Debugging koddagi xatolarni topish va to'g'rilash jarayonidir.
// IDE'larda breakpoint, call trace va watcher vositalari mavjud.
// IDE xatolarni ko'rsatadi va kodni to'ldirishga yordam beradi.
// Source map TypeScript va kompilyatsiya qilingan JS'ni bog'laydi.
// Source map bilan TS kodining o'zini debug qilish mumkin.
// debugger statement bajarilishni vaqtincha to'xtatadi.
// console.log sodda kuzatish va xatoni qidirishda yordam beradi.
// Brauzerlarning o'zida debugging vositalari mavjud.
// Chrome'da DevTools orqali kodni tekshirish mumkin.
class ShoppingCart {
    items = new Map();
    addItem(productTitle, quantity) {
        const currentQuantity = this.items.get(productTitle) ?? 0;
        this.items.set(productTitle, currentQuantity + quantity);
    }
    getItemCount(itemName) {
        return this.items.get(itemName) ?? 0;
    }
}
const debugCart = new ShoppingCart();
debugCart.addItem('Apple', 20);
console.log(`Number of apples: ${debugCart.getItemCount('Apple')}`);
// Breakpoint va qiymatlarni kuzatish muammoni topishni osonlashtiradi.
//# sourceMappingURL=index.js.map