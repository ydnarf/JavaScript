// Objetos dentro de un objeto

var miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        //Anidado
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        // Anidado
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 grs"
        }
    }
};

// masa
console.log(miReceta.ingredientes.masa.harina);
// cobertura
console.log(miReceta.ingredientes.cobertura.mantequilla);