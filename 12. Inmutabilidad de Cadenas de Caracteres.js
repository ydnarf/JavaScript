var miCadena = "Jola, Mundo";

console.log(miCadena);

miCadena[0] = "H"; // Error porque las cadenas son inmutables, no puedes cambiar los caracteres individuales de la cadena.

miCadena = "Hola, Mundo"; // Esta la forma correcta, cambiando el valor completo de la cadena de caracteres.

console.log(miCadena);