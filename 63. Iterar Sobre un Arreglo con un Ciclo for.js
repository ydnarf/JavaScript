var miArreglo = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {
    total += miArreglo[i];
}

console.log(total);

//---------------------

var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase()); // toUpperCase() convertir una cadena en caracteres en mayúsculas.
}

//----------------------

function contarNumerosPares(arreglo) {
    var total = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total++;
        }
    }

    return total;
}

console.log(contarNumerosPares([3, 2, 6, 13]));
