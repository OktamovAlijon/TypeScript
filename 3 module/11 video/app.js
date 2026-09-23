"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    value = 0;
    constructor() { }
    add(num) {
        this.value += num;
        return this;
    }
    subtract(num) {
        this.value -= num;
        return this;
    }
    multiply(num) {
        this.value *= num;
        return this;
    }
    getValue() {
        return this.value;
    }
}
const calc = new Calculator();
const result = calc.add(5).subtract(3).multiply(2).getValue();
//# sourceMappingURL=app.js.map