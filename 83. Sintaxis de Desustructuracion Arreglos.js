var a;
var b;
var c;

// [a, b, c] = [1, 2, 3];

// console.log(a);
// console.log(b);
// console.log(c);


[a, b,,, c] = [1, 2, 3, 4, 5, 6];

console.log(a); // 1
console.log(b); // 2
console.log(c); // 5

// Con la comas salte dos pociones respeto al valor de c


// ------------------------

// Tambien la desustructuracion Arreglos para cambiar los valores en una sola linea.

var x = 8;
var y = 6;

[y, x] = [x, y];

console.log("x: " + x);
console.log("y: " + y);


