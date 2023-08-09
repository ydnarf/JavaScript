/*
Tabla de verdad del operador AND
Para: X && Y
|   X   |   Y   |   X && Y  |
------------------------------
|   T   |   T   |     T     |
|   T   |   F   |     F     |
|   F   |   T   |     F     |
|   F   |   F   |     F     |
La expresión solo es verdadera cuando ambos operandos son verdaderos.
*/

var a = 10;

// (a > 5) && (a == 10) --> true && true --> true
console.log((a > 5) && (a == 10));