const PIN_4_O_6_DIGITOS = /^(?:[0-9]{4}|[0-9]{6})$/;

/**
 * Indica si un PIN es válido: cadena de 4 o 6 dígitos ASCII (0-9)
 * que no tiene todos los dígitos iguales. Nunca lanza excepciones.
 * @param {unknown} pin
 * @returns {boolean}
 */
export function esPinValido(pin) {
  if (typeof pin !== 'string' || !PIN_4_O_6_DIGITOS.test(pin)) {
    return false;
  }
  return new Set(pin).size > 1;
}