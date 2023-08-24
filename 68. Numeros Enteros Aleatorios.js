// var numeroAleatorioEntero0y19 = Math.floor (5 / 2) // Math.floor toma un número decimal y lo redondea hacia abajo al número entero más cercano. 
// console.log(numeroAleatorioEntero0y19);

// Ejemplo de un proyecto

// function generarFranccionAleatoria(limiteSuperior) {
//     // Generar un entero aleatorio entre 0 y el limite superior (sin incluirlo).
//     return Math.floor(Math.random() * limiteSuperior); 
// }

// // Ciclo

// for (var i = 0; i < 15; i++) {
//     console.log(generarFranccionAleatoria(5));
// }


// > Numero Entero Aleatorios en un Rango

function rangoAleatorio(limiteInferior, limiteSuperior){
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1) + limiteInferior);
}

for (var i = 0; i < 5; i++){
    console.log(rangoAleatorio(5, 8));
}


