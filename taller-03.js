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
