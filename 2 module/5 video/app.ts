// function logger(text: string): void {
// return
// }
// logger('Hello, World!')

// let unusable: void

// unusable = undefined

// function logger(text: string, callback: (message: string) => void) {
// console.log(text)
// callback('Logged: ' + text)
// }

// logger('Hello', message => {
// console.log(message)
// })

interface Calc {
a: number

b: number
}
function calc(data: Calc) {
return data.a + data.b
}
const result = calc({ a: 1, b: 2 })
console.log(result)