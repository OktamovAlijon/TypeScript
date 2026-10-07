// #35. Type in generic
function copy<T extends { id: number }>(obj: T): T {
  return { ...obj };
}

const person = { id: 1, name: 'Ali' };
const clone = copy(person);

console.log(clone);
// T extends ... => T faqat ma'lum shartga javob berishi kerak.
