function compararNumeros(a, b) {
    // if (a == b) {
    //     return "a y b son iguales" 
    // } else if (a > b) {
    //     return "a es mayor que b";
    // } else {
    //     return "b es mayor que a";
    // }

    return a == b ? "a y b son iguales" 
        : a > b ? "a es mayor que b"
        : "a es menor que b";
}

console.log(compararNumeros(15, 15))