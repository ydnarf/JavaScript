// El operador spread, en programación, se utiliza para descomponer elementos de una estructura, como un arreglo u objeto, para que puedan ser utilizados individualmente o combinados en otra estructura. Se denota también con tres puntos suspensivos (...).

const numeros = [1, 2, 3];

function sumar(x, y, z) {
    return x + y + z;
}


// console.log(sumar(numeros[0], numeros[1], numeros[2]))

console.log(sumar(...numeros)); // Con el operador spread