//! ---

//! 1. Imprimir en consola los números del 1 al 10.
//! 2. Imprimir en consola los números del 10 al 1.
//! 3. Imprimir en consola los números del 1 al 10 pero solo los pares.
//! 4. Imprimir en consola los números del 1 al 10 pero solo los impares.
//! 5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
//! 6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
//! 7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
//! 8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.

console.log("1) Imprimir del 1 al 10"

)

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log(
"2) Imprimir de 10 al 1"

)

for (i = 10; i >= 1; i--){
  console.log(i);
}


console.log(
  "3) Imprimir solo los pares del 1 al 10"
  
)

for( let i = 1; i <= 10; i++){

  if( i % 2 === 0){
    console.log(i);
  }

}

console.log(
  "4) Imprimir solo los impares del 1 al 10"
  
)

for( let i = 1; i <= 10; i++){

  if( i % 2 !== 0){
    console.log(i);
  }

}

console.log(
  "5) Imprimir solo los multiplos de 3 del 1 al 10"
  
)

for ( let i = 1; i <= 10; i++){

  if( i % 3 === 0){
    console.log(i);
  }
}

console.log(
  "6) Imprimir solo los multiplos de 5 del 1 al 10"
  
)


for( let i = 1; i <= 10; i++){

  if( i % 5 === 0){
    console.log(i);
  }
}

console.log(
  "7) Imprimir solo los multiplos de 3 y 5 del 1 al 10"
  
)


for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}

console.log(
  "8) Imprimir solo los multiplos de 3 o 5 del 1 al 10"
  
)

for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
