import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido', () => {
  describe('PIN válidos', () => {
    it.each([
      ['0123', 'conserva ceros iniciales (4 dígitos)'],
      ['1234', '4 dígitos distintos'],
      ['000001', '6 dígitos con ceros iniciales'],
      ['123456', '6 dígitos distintos'],
      ['1112', '4 dígitos no todos iguales'],
    ])('%s es válido (%s)', (pin) => {
      expect(esPinValido(pin)).toBe(true);
    });
  });

  describe('longitudes incorrectas', () => {
    it.each(['', '1', '123', '12345', '1234567'])(
      '"%s" es inválido por longitud',
      (pin) => {
        expect(esPinValido(pin)).toBe(false);
      }
    );
  });

  describe('todos los dígitos iguales', () => {
    it.each(['0000', '1111', '888888', '999999'])(
      '"%s" es inválido por repetición total',
      (pin) => {
        expect(esPinValido(pin)).toBe(false);
      }
    );
  });

  describe('caracteres no permitidos', () => {
    it.each([
      ['12a4', 'letra'],
      [' 1234', 'espacio inicial'],
      ['1234 ', 'espacio final'],
      ['12 34', 'espacio intermedio'],
      ['-123', 'signo'],
      ['+123', 'signo'],
      ['12-34', 'separador'],
      ['１２３４', 'dígitos de ancho completo (no ASCII)'],
      ['١٢٣٤', 'dígitos arábigo-índicos (no ASCII)'],
      ['1234\n', 'salto de línea final'],
    ])('"%s" es inválido (%s)', (pin) => {
      expect(esPinValido(pin)).toBe(false);
    });
  });

  describe('tipos incorrectos', () => {
    it.each([
      [null],
      [undefined],
      [1234],
      [123456],
      [true],
      [{}],
      [['1', '2', '3', '4']],
    ])('%o es inválido y no lanza excepción', (pin) => {
      expect(() => esPinValido(pin)).not.toThrow();
      expect(esPinValido(pin)).toBe(false);
    });
  });
});