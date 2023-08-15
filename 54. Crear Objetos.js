var miPerro = {
    "nombre": "Gino",
    "edad": 5,
    "peso": 6,
    "raza": "Beagle"
};

// Acceder a Propiedades: Notación de Punto

console.log(miPerro.nombre);

// Acceder a Propiedades: Notación de Corchetes

console.log(miPerro["raza"]);

// Acceder a Propiedades: Variables

var resultados = {
    1: "noe256",
    2: "gino577",
    3: "estef543",
    4: "kiara566"
};

var posicion = 4;

console.log(resultados[posicion]);

// Actualizar Propiedades

var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color); // azul

mochila.color = "negro"; // Actulizar el valor

console.log(mochila.color);

console.log(mochila.contenido);
mochila.contenido.push("Lápiz");
console.log(mochila.contenido);
mochila.contenido.unshift("Laptop");
console.log(mochila.contenido);

// Agregar Propiedades

var curso = {
    "titulo": "Aprende JavaScript desde Cero",
    "idioma": "Español",
    "duracion": 30
};

curso.vistas = 34500; // Propiedad nueva

console.log(curso.vistas);

// Eliminar Propiedad 

delete curso.duracion; // Proiedad eliminada

console.log(curso);