/*
Tabla de verdad del operador AND
Para: X || Y
|   X   |   Y   |   X || Y  |
------------------------------
|   T   |   T   |     T     |
|   T   |   F   |     T     |
|   F   |   T   |     T     |
|   F   |   F   |     F     |
La expresión es verdadera si alguno de los dos operandos o ambos son verdaderos.
*/

var a = 20;

// (a < 5) || (a > 15) --> false || true --> true
console.log((a < 5) || (a > 15));