// const es una abreviacion de constante, son variables que utiliza para acceder a ese valor, no podemos modificar el valor si ya ha sido asignado por primera vez.

// El nombre de la constante se escribe en mayusculas para indicar que no se debe modificar su valor.

// const MI_CONSTANTE = 35;

// console.log(MI_CONSTANTE);

function calcularAreaCirculo(radio) {
    const PI = 3.14;

    if (radio < 0) {
        return undefined;
    } else {
        return PI * (radio ** 2);
    }
}

console.log(calcularAreaCirculo(10)); // 314    