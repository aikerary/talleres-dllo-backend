//Punto 1
//Le correjí lo de convertir el string a lista, funciona perfectamente
//Muchas gracias 😆

function desglosarString(str, flag) {
  return (
    [...str].filter((letra) => ["a", "e", "i", "o", "u"].includes(letra))
      .length *
      (1 - 2 * (flag === "consonante")) +
    str.length * (flag === "consonante")
  );
}

// Punto 2
// Tecnicamente es una sola línea... 😅

function twoSum(numbers, target) {
  return numbers.reduce((acc, curr, i) => {
    if (acc[0] === undefined) {
      numbers.forEach((element, j) => {
        if (i !== j && curr + element === target) {
          acc = [i, j];
        }
      });
    }
    return acc;
  }, []);
}

//Punto 3
//Conversión romana a decimal
// No fue la mejor idea usar un objeto tan largo
// Pero quería hacerlo en una linea 😅

function conversionRomana(str) {
  return [...str].reduce(
    (r, c, i) =>
      r +
      ({ I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }[str[i + 1]] >
      { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }[c]
        ? -{ I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }[c]
        : { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }[c]),
    0,
  );
}
