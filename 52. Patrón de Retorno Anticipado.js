function calcularRaizCuadrada(num) {
    if (num < 0) {
        return undefined; // Anticipacion de error NaN que signifaca Not a Number.
    }
    return Math.sqrt(num); //Math.sqrt se utiliza para calcular la raiz cuadrada de un numero.
}

console.log(calcularRaizCuadrada(25));