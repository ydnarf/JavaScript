// var miVariableGlobal = 4;

// console.log(miVariableGlobal);

// function miFuncion() {
//     console.log(miVariableGlobal);

//     var miVariableLocal = 8;
//     console.log(miVariableLocal);
// }

// miFuncion();

// console.log(miVariableGlobal);
// console.log(miVariableLocal); // Error


// ------------------------------------------

// for (var i = 0; i < 3; i++) {
//     console.log(i); // 0, 1, 2
// }

// console.log("variable: " + i); // 3

// Con let

for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log("variable: " + i); // Error porque fue definida de forma local.