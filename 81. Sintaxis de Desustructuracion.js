const usuario = {
    nombre: "Gino Smith",
    edad: 34
};

// const nombre = usuario.nombre;
// const edad = usuario.edad;

//Estandar ES6
const {nombre, edad} = usuario;


// Otro Ejemplo

var coordenadas = {
    x: 4,
    y: 6,
    z: 12
};

// const x = coordenadas.x;
// const y = coordenadas.y;
// const z = coordenadas.z;

//Estandar ES6
const {x, y, z} = coordenadas;

console.log(x, y, z);