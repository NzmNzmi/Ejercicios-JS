//Ordene 5 números de menor a mayor
let n1 = parseFloat(prompt("Escribe el primer número:"));
let n2 = parseFloat(prompt("Escribe el segundo número:"));
let n3 = parseFloat(prompt("Escribe el tercer número:"));
let n4 = parseFloat(prompt("Escribe el cuarto número:"));
let n5 = parseFloat(prompt("Escribe el quinto número:"));

let numeros = [n1,n2,n3,n4,n5];

numeros.sort(function(a, b){return a - b});

alert("El orden es" + numeros);

//nums.sort((a,b) => a - b); // [1, 2, 3, 4, 6, 10, 19]