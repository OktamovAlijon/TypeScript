"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    static count = 0;
    static increment() {
        Counter.count++;
    }
    static add(a, b) {
        this.increment();
        return a + b;
    }
}
const c = new Counter();
console.log(Counter.count);
Counter.increment();
console.log(Counter.count);
console.log(Counter.add(10, 100));
console.log(Counter.count);
const MathHelper = {
    add: (a, b) => a + b,
};
console.log(MathHelper.add(1, 2)); // 3
//# sourceMappingURL=app.js.map