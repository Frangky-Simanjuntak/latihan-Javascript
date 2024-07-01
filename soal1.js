// soal1.js

const calculateSquareRoot = (x) => {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    } else {
        return Math.sqrt(x);
    }
};


const userInputNegatif = -1;
const userInputGanjil = 5
let result = calculateSquareRoot(userInputNegatif);
console.log(result);
result = calculateSquareRoot(userInputGanjil);
console.log(userInputGanjil)