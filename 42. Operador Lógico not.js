/*
Tabla de verdad del operador NOT
Para: !X
|   X   |   !X  |
--------------------
|   T   |   F   |
|   F   |   T   |    
El operador Not se utiliza para negar el valor de verdad de otra expresion. 
*/

// console.log(!true); // false
// console.log(!false); // true

var a = 8;

// !(a > 5) --> !true --> false
console.log(!(a > 5));

// !(a > 5) --> !false --> true
console.log(!(a < 5));