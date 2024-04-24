//! Dado los siguientes valores numéricos:

//!  1. Muestre por consola si el numero1 es mayor o igual que numero2.
//!  2. Muestre por consola si el numero1 es menor o igual que numero2.
//!  3. Muestre por consola si el numero1 es menor que numero3.
//!  4. Muestre por consola si el numero3 es menor que numero2.
//!  5. Muestre por consola si el numero3 es estrictamente diferente que numero1.
//!  6. Muestre por consola si el numero1 es estrictamente igual al numero2.

const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

console.log("Numero 1 = 15");
console.log("Numero 2 = 20");
console.log("Numero 3 = 25");

console.log("1) El Numero 1 es mayor que el Numero 2? ", numero1 >= numero2);

console.log("2) El Numero 1 es menor o igual que el Numero 2? ", numero1 <= numero2);

console.log("3) El Numero 1 es menor que el Numero 3? ", numero1 < numero3);

console.log("4) El Numero 3 es menor que el Numero 2? ", numero3 < numero2);

console.log("5) El Numero 3 es estrictamente diferente que el Numero 1? ", numero3 !== numero1 );

console.log("6) El Numero 1 es estrictamente igual que el Numero 2? ", numero1 === numero2);





