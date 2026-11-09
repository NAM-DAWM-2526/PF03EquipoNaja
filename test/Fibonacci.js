const MAX_INDICE = 78; // fibonacci(78) es el último término dentro de Number.MAX_SAFE_INTEGER
const MENSAJE_ERROR = 'solo números enteros entre 0 y 78';

/**
 * Devuelve el término de índice n de la sucesión de Fibonacci.
 * @param {number} n entero entre 0 y 78, ambos incluidos
 * @returns {number}
 * @throws {RangeError} si n no es un número entero entre 0 y 78
 */
export function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0 || n > MAX_INDICE) {
    throw new RangeError(MENSAJE_ERROR);
  }

  let anterior = 0;
  let actual = 1;
  for (let i = 0; i < n; i++) {
    [anterior, actual] = [actual, anterior + actual];
  }
  return anterior;
}