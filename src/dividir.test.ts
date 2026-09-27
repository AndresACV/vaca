import assert from 'node:assert/strict';
import { test } from 'node:test';
import { dividir } from './dividir.ts';

const gasto = (monto: number, entre: string[]) => ({
  descripcion: 'prueba',
  monto,
  pagadoPor: entre[0],
  entre,
});

test('divide en partes iguales cuando la división es exacta', () => {
  assert.deepEqual(
    dividir(gasto(9000, ['Ana', 'Beto', 'Caro'])),
    new Map([['Ana', 3000], ['Beto', 3000], ['Caro', 3000]]),
  );
});

test('las partes suman exactamente el monto del gasto', () => {
  const partes = dividir(gasto(10000, ['Ana', 'Beto', 'Caro']));
  const suma = [...partes.values()].reduce((a, b) => a + b, 0);
  assert.equal(suma, 10000);
});

test('un gasto sin personas es un error', () => {
  assert.throws(() => dividir(gasto(5000, [])), /no dice entre quiénes/);
});
