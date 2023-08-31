// var a;
// var b;
// var arr;

// [a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];

// console.log(a);
// console.log(b);
// console.log(arr);

// Con el operador (...) rest se asignados todos los valor que no fuero asignados en a y b.

//------------------------------------

const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removerTresPrimerosElementos(arreglo) {
    const [, , , ...nuevoArreglo] = arreglo;
    return nuevoArreglo;
}

const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal);