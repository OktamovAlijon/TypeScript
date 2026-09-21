//null - qiymat berilmaganligini bildiradi
//undefined - o'zgaruvchiga qiymat berilmaganligini bildiradi

// let x

// console.log(x) //undefined


// let xx: null = null

// console.log(xx) //null


// function logger(msg: string | null) {
// if (msg !== null) {
// console.log(msg. toUpperCase())
// }
// console.log('No message provided')
// }
// logger('Hello, World!')
// logger(null)


let username: string | null = null
//nulish coalescing operator
let showusername = username ?? 'Guest'

//nul
//undefined
