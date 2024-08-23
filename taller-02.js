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
