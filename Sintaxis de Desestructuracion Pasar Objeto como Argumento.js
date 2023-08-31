var nuevoperfilCliente = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "Española",
    ubicacion: "España"
};

// const actualizarPerfil = (informacionDePerfil) => {
//     const {nombre, edad, nacionalidad, ubicacion} = informacionDePerfil;
//     console.log(nombre);
//     console.log(edad);
//     console.log(nacionalidad);
//     console.log(ubicacion);
// };

// Una forma mas simplificada de obtener el mismo resultado

const actualizarPerfil = ({nombre, edad, nacionalidad, ubicacion}) => {
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
}

actualizarPerfil(nuevoperfilCliente);


// Otro Ejemplo

const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
};

const mitad = ({max, min}) => (max + min) / 2.0;

console.log(mitad(estadisticas));