// Void - funksiya hecj qanday qiymat qaytarmaydi (return: bo'lish mumkin)
// Never - funksiya xech qachon tugamaydi yokida xatolik yuz beradi
// function throwError(message: string): never {
// throw new Error(message)
// }
// function fetchData() {
// try {
// } catch (error) {
// throwError('An error occurred')
// }
// }

// function throwError(message: string): never {
// throw new Error(message)
// }

// async function fetchData() {
// try {
// const response = await fetch('https://jsonplaceholder.typicode.com/uses')
// if (!response.ok) {
// throwError('No data found')
// }
// const data = await response.json()
// console.log(data)
// } catch (error) {
// throwError('Failed to fetch data')
// }
// }

// fetchData()

function infiniteLoop(): never {
while (true) {
console.log('Infinite Loop!')
}
}
infiniteLoop()