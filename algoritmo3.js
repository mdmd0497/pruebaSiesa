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

// Crear árboles 
let arbol1 = new Nodo(4);
let arbol2 = new Nodo(4);
arbol2.agregarHijo(new Nodo(2));
arbol2.agregarHijo(new Nodo(1));
let arbol3 = new Nodo(4);
arbol3.agregarHijo(new Nodo(1));
arbol3.agregarHijo(new Nodo(2));
arbol3.agregarHijo(new Nodo(5));
arbol3.hijos[2].agregarHijo(new Nodo(3));
arbol3.hijos[2].agregarHijo(new Nodo(1));
arbol3.hijos[2].agregarHijo(new Nodo(4));

console.log("Árbol 1:");
console.log(`Peso: ${arbol1.obtenerPeso()}`);
console.log(`Altura: ${arbol1.obtenerAltura()}`);
console.log(`Peso promedio: ${arbol1.obtenerPesoPromedio()}\n`);

console.log("Árbol 2:");
console.log(`Peso: ${arbol2.obtenerPeso()}`);
console.log(`Altura: ${arbol2.obtenerAltura()}`);
console.log(`Peso promedio: ${arbol2.obtenerPesoPromedio()}\n`);

console.log("Árbol 3:");
console.log(`Peso: ${arbol3.obtenerPeso()}`);
console.log(`Altura: ${arbol3.obtenerAltura()}`);
console.log(`Peso promedio: ${arbol3.obtenerPesoPromedio()}\n`);