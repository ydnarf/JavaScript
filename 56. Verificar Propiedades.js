// Verificar Propiedad de un Objeto

var miCuardeno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
}

console.log(miCuardeno.hasOwnProperty("color")); // Con hasOwnProperty verificamos si el objeto existe.


// Other example

function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + obj[propiedad];
    } else {
        return "El objeto no tiene esta propiedad";
    }
}

var miCuardeno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

console.log(verificarPropiedad(miCuardeno, "color"));