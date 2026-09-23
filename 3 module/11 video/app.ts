class Calculator {
    value: number = 0

    constructor() { }

    add(num: number): this {
        this.value += num
        return this
    }

    subtract(num: number): this {
        this.value -= num
        return this
    }

    multiply(num: number): this {
        this.value *= num
        return this
    }
    getValue(): number {
        return this.value
    }
}
const calc = new Calculator()
const result = calc.add(5).subtract(3).multiply(2).getValue()