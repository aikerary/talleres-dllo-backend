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