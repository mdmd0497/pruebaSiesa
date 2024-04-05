
function convertToBase(number, base) {
    // Inicializamos una cadena vacía para almacenar el resultado
    let result = "";

    // Realizamos divisiones hasta que el número sea 0
    while (number > 0) {
        // Calculamos el residuo al dividir por la nueva base
        const remainder = number % base;
        // Agregamos el residuo a la izquierda de la cadena de resultado
        result = remainder + result;
        // Actualizamos el número dividiéndolo por la nueva base
        number = Math.floor(number / base);
    }

    return result;
}

// Ejemplo de uso: Convertir 287 de base 10 a base 4
const numberInBase10 = 287;
const newBase = 4;
const resultInNewBase = convertToBase(numberInBase10, newBase);
console.log(`${numberInBase10} en base 10 es ${resultInNewBase} en base ${newBase}`);
// otro ejemplo de uso con 42 en base 10 es 101010 en base 2
const numberInBase10_1 = 42;
const resultInBinary = convertToBase(numberInBase10_1, 2);
console.log(`${numberInBase10} en base 10 es ${resultInBinary} en base 2`);
// Salida: "255 en base 10 es FF en base 16"
// 10 = A, 11 = B, 12 = C, 13 = D, 14 = E, 15 =F
const numberInBase10_2 = 255;
const resultInHex = convertToBase(numberInBase10_2, 16);
console.log(`${numberInBase10} en base 10 es ${resultInHex} en base 16`);

const numberInBase10_3 = 64;
const resultInOctal = convertToBase(numberInBase10_3, 8);
console.log(`${numberInBase10} en base 10 es ${resultInOctal} en base 8`);
// Salida: "64 en base 10 es 100 en base 8"