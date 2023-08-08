// Las variables locales como su nombre lo indica son locales para una funcion, dentro una funcion y que solo se puede usar dentro de una funcion.

function miFuncion() {
    var miVariableLocal = 4;
    console.log(miVariableLocal);
}

miFuncion();

console.log(miVariableLocal); // Error no se puede utilizar la variable fuera de la funcion porque es de ambito local.