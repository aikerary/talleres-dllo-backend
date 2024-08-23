// Punto 1
// Desarrolle una función llamada findMax que reciba una lista
// de números por parametro y devuelva el número mayor de la lista.
// no es permitido utilizar el método Math.max
// Hint: Utilizar el método reduce

function findMax(numbers) {
  return numbers.reduce((acc, curr) => (acc > curr ? acc : curr));
}

// Punto 2
//Desarrolle una función llamada includes que reciba una lista de números
// y un número por parametro y devuelva true si el número se encuentra en la lista
// o false en caso contrario.
// no es permitido utilizar el método includes
// Hint: Usar for each

function includes(numbers, number) {
  let result = false;
  numbers.forEach((element) => {
    if (element === number) {
      result = true;
    }
  });
  return result;
}

// Punto 3
// Desarrolle una función llamada sum que reciba una lista de números
// y devuelva la suma de todos los números de la lista.

function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr);
}

// Punto 4
// Desarrolle una función llamada missingNumbers que reciba una lista de números
// y devuelva un array con los números faltantes entre el menor y mayor número de la lista.
// No usar max ni min

function missingNumbers(numbers) {
  let min = numbers.reduce((acc, curr) => (acc < curr ? acc : curr));
  let max = findMax(numbers);
  let result = [];
  for (let i = min; i < max; i++) {
    if (!includes(numbers, i)) {
      result.push(i);
    }
  }
  return result;
}
