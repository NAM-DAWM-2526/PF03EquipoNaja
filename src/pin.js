export function esPinValido(pin) {
    if (typeof pin !== 'string') return false;
  if (!/^([0-9]{4}|[0-9]{6})$/.test(pin)) return false;
  return new Set(pin).size > 1;
}