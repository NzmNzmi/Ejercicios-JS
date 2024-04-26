//Encuentre el factorial de cualquier número dado
// = n ( n − 1 ) ! - Factorial de 0 y de 1 = 1


let num = parseFloat(prompt("Ingrese el número del que quiere encontrar el factorial"));

let f =1;

for (let i = 1; i <= num; i++) {
 f *= i; // f = f*i;
}

alert(f);