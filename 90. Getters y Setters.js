class Libro {
    constructor(autor) {
        this._autor = autor; // Propiedad privada
    }

    // Para obtener propiedad privada
    get autor() {
        //console.log("Getter");
        return this._autor;
    }

    // Para actulizar valor de la propiedad
    set autor(nuevoAutor){
        console.log("Setter");
        this._autor = nuevoAutor;
    }
}

// Getter
const libro = new Libro("anónimo");
console.log(libro.autor);

// Setter
libro.autor = "Gino Smith";
console.log(libro.autor);
