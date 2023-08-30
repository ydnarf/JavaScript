// const usuario = {
//     jhonDoe: {
//         edad: 27,
//         correo: "johnDoe@freecodecamp.com"
//     }
// };

// const {jhonDoe: {edad, correo}} = usuario;

// console.log(edad);
// console.log(correo);


// >> Otro Ejemplo

const PRONOSTICO_LOCAL = {
    "ayer": {
        minima: 61,
        maxima: 75
    },
    "hoy": {
        minima: 64,
        maxima: 77
    },
    "mañana": {
        minima: 68,
        maxima: 80
    }
};

const {ayer: {minima: minimaAyer, maxima: maximaAyer}} = PRONOSTICO_LOCAL;
const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;
const {mañana: {minima: minimaMañana, maxima: maximaMañana}} = PRONOSTICO_LOCAL;

console.log(minimaAyer, maximaAyer);
console.log(minimaHoy, maximaHoy);
console.log(minimaMañana, maximaMañana);
