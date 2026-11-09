import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('fibonacci', () => {
  describe('casos válidos', () => {
    it.each([
      [0, 0],
      [1, 1],
      [2, 1],
      [5, 5],
      [10, 55],
      [78, 8944394323791464],
    ])('fibonacci(%i) devuelve %i', (n, esperado) => {
      expect(fibonacci(n)).toBe(esperado);
    });
  });

  describe('entradas inválidas', () => {
    it.each([-1, 79, 2.5, NaN, Infinity, -Infinity, '5', null, undefined])(
      'lanza RangeError con %s',
      (entrada) => {
        expect(() => fibonacci(entrada)).toThrow(RangeError);
        expect(() => fibonacci(entrada)).toThrow('solo números enteros entre 0 y 78');
      }
    );
  });
});