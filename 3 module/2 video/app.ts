// class Car {
//     name: string
//     year: Date

//     constructor(name: string, year: Date)
//     constructor(data: { name: string; year: Date })

//     constructor(nameOrData: string | { name: string; year: Date }, year?: Date) {
//         if (typeof nameOrData === 'string') {
//             this.name = nameOrData
//             this.year = year!
//         } else if (typeof nameOrData === 'object') {
//             this.name = nameOrData.name
//             this.year = nameOrData.year
//         }
//     }
// }
// const toyota = new Car('Toyota', new Date('2001-11-01'))
// console.log(toyota)

// const chevrolet = new Car({
//     name: 'Chevrolet',
//     year: new Date('2001-11-01'),
// })