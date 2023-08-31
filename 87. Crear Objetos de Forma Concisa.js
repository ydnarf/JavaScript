// const crearPersona = (nombre, edad, idioma) => {
//     return{
//         nombre: nombre,
//         edad: edad,
//         idioma: idioma
//     };


// };

//Funcion flecha en una sola linea

const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona("Gino Smith", 28, "Español"));