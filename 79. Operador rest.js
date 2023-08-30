// El operador rest, en programación, recopila argumentos o elementos en una estructura de datos, como un arreglo, para manipularlos de manera más conveniente y flexible. Se denota con tres puntos suspensivos (...).

// function miFuncion(...args){
//     console.log(args);
// }

// miFuncion(1, 2, 4, 5, 6);

//------------------------------

const sumar = (...args) => {
    return args.reduce((a, b) => a + b, 0); 
}

// .reduce() con estos argumentos suma los elementos del arreglo y retorna el resultado. Pasamos una función flecha como argumento.