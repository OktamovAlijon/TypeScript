"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #36. Class
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const strBox = new Box('TypeScript');
const numBox = new Box(12);
console.log(strBox.getValue().toUpperCase());
console.log(numBox.getValue() + 5);
//# sourceMappingURL=index.js.map