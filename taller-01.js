// P1.Desarrolle una función llamada convertidorTemp que reciba
// una temperatura en grados Celsius y la convierta a grados Fahrenheit.

function convertidorTemp(celsius) {
    return celsius * 9 / 5 + 32;
}

console.log(convertidorTemp(0)); // 32

// P2. Desarrolle una función llamada resolvedor que retorne
// el valor de x de la formula general de una ecuación cuadrática.
// La función debe recibir tres parámetros: a, b y c. Además de un cuarto
// parámetro opcional llamado signo que puede tener dos valores: + o -.
// Si el signo es + se debe retornar el valor positivo de x y si es - se debe
// retornar el valor negativo de x.

function resolvedor(a, b, c, signo) {
    let x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    return signo === '+' ? x1 : x2;
}

console.log(resolvedor(1, -5, 6, '+')); // 3

// P3. Desarrolle una función llamada mejorParidad resuelva y retorne
// la paridad de un número, es decir tiene que dar un booleano de si es par

function mejorParidad(numero) {
    return numero % 2 === 0;
}

console.log(mejorParidad(7)); // true

// P4. Desarrolle una función llamada peorParidad resuelva y retorne
// la paridad de un número, es decir tiene que dar un booleano de si es par

function peorParidad(numero) {
   const Zzzz= [...Array(numero)].map((_,i)=>i).reduce((a,b)=>a+b);
   return Zzzz * numero % 2 === 0;
}

console.log(peorParidad(7)); // true