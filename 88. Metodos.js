const persona = {
    nombre: "Chris",
    presentarse(){
        return `Hola! Mi nombre es ${this.nombre}.`;
    }
};

console.log(persona.presentarse()); // Si el valor de una propiedad es una función, se denomina "método".