class Car {
    name: string
    year: Date

    constructor(name: string, year: Date) {
        this.name = name
        this.year = year
    }
}
const toyota = new Car('Toyota', new Date('2001-11-01'))
console.log(toyota)
toyota.name = 'Toyota Corolla'
console.log(toyota)

const chevrolet = new Car('Chevrolet', new Date('2005-05-15'))
console.log(chevrolet)

