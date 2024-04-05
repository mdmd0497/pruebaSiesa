function divisionEnteros(numero1, numero2) {
    if (numero2 === 0) {
        return "No se puede dividir por cero";
    } else {
        return numero1 / numero2;
    }
}

// Ejemplo de uso:
let resultado = divisionEnteros(10, 2);
console.log("La división de 10 entre 2 es:", resultado);

resultado = divisionEnteros(5, 0);
console.log(resultado); // Mostrará "No se puede dividir por cero"