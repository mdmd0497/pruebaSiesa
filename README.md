# pruebaSiesa
# Descripción del código algoritmo1.js

El siguiente código es una función en JavaScript llamada `divisionEnteros` que permite calcular la división entre dos números enteros. Además, se proporciona un ejemplo de su uso.

## Función divisionEnteros

La función `divisionEnteros` toma dos números como entrada y devuelve el resultado de la división del primer número por el segundo. Antes de realizar la división, verifica si el segundo número es cero, ya que la división por cero no está definida en matemáticas. Si el segundo número es cero, la función devuelve un mensaje indicando que no se puede dividir por cero. Si el segundo número no es cero, la función realiza la división y devuelve el resultado.

```javascript
function divisionEnteros(numero1, numero2) {
    if (numero2 === 0) {
        return "No se puede dividir por cero";
    } else {
        return numero1 / numero2;
    }
}
```
# Descripción del código algoritmo2.js

El siguiente código es una función en JavaScript llamada `convertToBase` que permite convertir un número de base 10 a otra base deseada. Además, se proporcionan ejemplos de su uso con diferentes bases.

## Función convertToBase

La función `convertToBase` toma dos parámetros: el número que se desea convertir y la base a la que se quiere convertir. Utiliza un algoritmo de división para calcular los dígitos en la nueva base y construye el resultado en forma de cadena.

```javascript
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
```
# Descripción del código algoritmo3.js

El siguiente código es una clase en JavaScript llamada `Nodo` que representa un nodo en un árbol. La clase tiene métodos para agregar hijos al nodo, calcular el peso del nodo y sus hijos, obtener la altura del nodo, calcular el peso promedio del árbol y contar el número total de nodos en el árbol. Además, se proporcionan ejemplos de su uso con tres árboles diferentes.

## Clase Nodo

La clase `Nodo` tiene los siguientes métodos:

- `constructor(peso)`: Inicializa un nuevo nodo con el peso especificado y una lista de hijos vacía.
- `agregarHijo(nodo)`: Agrega un nodo como hijo del nodo actual.
- `obtenerPeso()`: Devuelve el peso del nodo y la suma de los pesos de todos sus hijos.
- `obtenerAltura()`: Devuelve la altura del árbol con el nodo actual como raíz.
- `obtenerPesoPromedio()`: Devuelve el peso promedio de todos los nodos en el árbol.
- `contarNodos()`: Devuelve el número total de nodos en el árbol.

```javascript
class Nodo {
    constructor(peso) {
        this.peso = peso;
        this.hijos = [];
    }

    agregarHijo(nodo) {
        this.hijos.push(nodo);
    }

    obtenerPeso() {
        return this.peso + this.hijos.reduce((sum, hijo) => sum + hijo.obtenerPeso(), 0);
    }

    obtenerAltura() {
        if (this.hijos.length === 0) return 1;
        return 1 + Math.max(...this.hijos.map(hijo => hijo.obtenerAltura()));
    }

    obtenerPesoPromedio() {
        let pesoTotal = this.obtenerPeso();
        let cantidadNodos = this.contarNodos();
        return pesoTotal / cantidadNodos;
    }

    contarNodos() {
        let contador = 1; // Contamos el nodo actual
        for (let hijo of this.hijos) {
            contador += hijo.contarNodos();
        }
        return contador;
    }
}
```

