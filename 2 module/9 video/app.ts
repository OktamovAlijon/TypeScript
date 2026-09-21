// Type Casting (Type Assertion) (Turi bilan ishlash)
// Type guards (Turi bilan tekshirish)
// Asserts (tasdiqlash)

// let message: unknown = 123

// // Angle bracket syntax
// let strLength1: string = <string>message
// console.log(strLength1)I

// // as syntax
// let strLength2: string = message as string
// console.log(strLength2.length)

// class Dog {
//     bark() {
//         console.log('Woof')
//     }
// }
// class Cat {
//     meow() {
//         console.log('Meow')
//     }
// }
// function makeSoun(animal: Dog | Cat) { }

type Car = { speed: number }
type Plane = { altitude: number }

function getInfo(vehicle: Car | Plane) {
if ('speed' in vehicle) {
console.log(`Speed: ${vehicle.speed} km/h`)
} else {
console.log(`Altitude: ${vehicle.altitude} metres`)
}
}

getInfo({ speed: 100})
getInfo({ altitude: 10000 })