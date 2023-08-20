var contactos = [
    {
        "nombre": "Nora",
        "apellido": "Nav",
        "numero": "8095653632",
        "gustos": ["Pizza", "Programación"]
    },
    {

        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "8095656582",
        "gustos": ["Hogwarts", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "8095655874",
        "gustos": ["Casos interesantes", "Violín"]
    }
];

function buscarPerfil(nombre, propiedad) {
    for (var i = 0; i < contactos.length; i++){
        if (contactos[i].nombre === nombre) {
            return contactos[i][propiedad] || "La propiedad no existe.";
        }
    }
    return "El contacto no está en la lista.";
}

console.log(buscarPerfil("Nora", "numero"));