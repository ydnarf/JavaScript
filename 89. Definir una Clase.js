/*
Para crear el nombre de una clase segun los 
estandares globales utilizamos la 
nomenclatura PascalCase.
*/

class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;
    }
}

var zeus = new TransbordadorEspacial("Júpiter");
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta);


//---------------------------------------------

class Mascota{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

var miMascota = new Mascota("Nora", 5);
var tuMascota = new Mascota("Gino", 2);

console.log(miMascota);
console.log(tuMascota);