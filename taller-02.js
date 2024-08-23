// Punto 1
// Desarrolle una función llamada findMax que reciba una lista
// de números por parametro y devuelva el número mayor de la lista.
// no es permitido utilizar el método Math.max
// Hint: Utilice el método reduce

function findMax(numbers) {
  return numbers.reduce((acc, curr) => (acc > curr ? acc : curr));
}

console.log(findMax([5, 4, 7, 6, 6, 1, 7]));
