"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #34. Promise
const wait = (ms) => new Promise((resolve) => {
    setTimeout(() => resolve('Tayyor!'), ms);
});
(async () => {
    const result = await wait(1000);
    console.log(result);
})();
// Promise - kelajakdagi qiymatni kutib oladi.
//# sourceMappingURL=index.js.map