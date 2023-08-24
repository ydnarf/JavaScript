// const fecha = function() {
//     return new Date();
// }

// const fecha = () => new Date(); // Con la funcion flecha

// -------------------------------------------------------------
// >>> Con parametros


// const sumarTres = function(x) {
//     return x + 3;
// }

const sumarTres = (x) => x + 3; // Con la funcion flecha

console.log(sumarTres(4));

//----------------------------------------------------------------
// >>> Concatenar Arreglos

// const concatenarArreglos = function(arr1, arr2) {
//     return arr1.concat(arr2); // concat se utiliza para unir diferentes cadenas o matrices para formar una sola cadena o matriz más grande.
// }

// console.log(concatenarArreglos([1, 2], [3, 4, 5]));

const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2); // Con la funcion flecha

console.log(concatenarArreglos([1, 2], [3, 4, 5]));

//-------------------------------------------------------------------
// Si la funcion tiene mas de una linea

// const sumar = function(a, b) {
//     let num = 6;
//     return a + b + num;
// }

const sumar = (a, b) => {
    let num = 6;
    return a + b + num;
}

console.log(sumar(1, 1));

