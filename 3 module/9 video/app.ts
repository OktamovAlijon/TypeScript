class Counter {
    static count: number = 0

    static increment() {
        Counter.count++
    }

    static add(a: number, b: number) {
        this.increment()
        return a + b
    }
}
const c = new Counter()

console.log(Counter.count)
Counter.increment()
console.log(Counter.count)

console.log(Counter.add(10, 100))
console.log(Counter.count)

const MathHelper = {
    add: (a: number, b: number) => a + b,
}
console.log(MathHelper.add(1, 2)) // 3