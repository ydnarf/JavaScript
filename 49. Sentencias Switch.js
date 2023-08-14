
function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gama";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}

console.log(clasificarValor(4));



var producto = "hamburguesa";

switch (producto) {
    case "pizza":
        console.log("La pizza basica cuesta $10.55");
        break;
    case "hamburguesa":
        console.log("Las hamburguesas cuestan $6.78");
        break;
    case "helado":
        console.log("El helado cuesta $2.8");
        break;
}


//Opción Predeterminada

// La opción se va a ejectuar si ningunos de los valores es el valor de la variable o la expresión.


function seleccionarIdioma(valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Francés";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:    // Opción Predeterminada
            idioma = "Inglés";
            break;
    }
    return idioma;
}

console.log(seleccionarIdioma());


// Múltiples Casos

function clasificarVolumen(valor) {
    var volumen;
    switch (valor) {
        case 1:
            volumen = "bajo";
            break;
        case 2:
        case 3:
            volumen = "intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "alto";
    }
    return volumen;
}

console.log(clasificarVolumen(1));