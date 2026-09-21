function getname(firstname: string, lastname: string) {
    console.log(`hello ${firstname} ${lastname}`);
    
}
getname("alijon", "uktamov")
//any xoxlagan malumot turini qabul qladi
//malumot turi string bolsa number bermoqchi bo'lsangiz u error chiqaradi va siz bu yerga faqat string malumot turini bershingiz kerak!


//void bu = hech narsa qaytarilmaydi

const isAdult = (age: number): boolean => {
    if (age >= 18) {
        return true;
    }
    return false;
}

const checkAdult = isAdult(20);
console.log(checkAdult);