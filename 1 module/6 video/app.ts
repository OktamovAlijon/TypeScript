function getInfo(): [string, number] {

return ['SamarBadrididnov', 24]
}

const logger = getInfo()

const [fullName, age] = logger 
console.log(fullName, age)

//JavaScript-da o'zgaruvchilar tipi dinamik bo'lsa, TypeScript-da har bir o'zgaruvchi, funksiya argumenti va qaytuvchi qiymat tipi aniq ko'rsatiladi (masalan: string, number, boolean). Bu kod yozish jarayonidayoq xatoliklarni aniqlashga yordam beradi.