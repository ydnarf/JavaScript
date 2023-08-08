// El Ambito Global es una variable que se puede acceder, modificar y utilizar en un cualquier lugar del programa.

var miVariableGlobal = 5;

console.log(miVariableGlobal);

function miFuncion() {
    console.log(miVariableGlobal);
}

miFuncion();

console.log(miVariableGlobal);