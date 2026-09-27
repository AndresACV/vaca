import assert from 'node:assert/strict';
import { test } from 'node:test';
import { calcularSaldos } from './saldos.ts';

test('quien pagó queda a favor y los demás en contra', () => {
  const saldos = calcularSaldos([
    { descripcion: 'Pizza', monto: 12000, pagadoPor: 'Ana', entre: ['Ana', 'Beto', 'Caro'] },
  ]);
  assert.deepEqual(saldos, new Map([['Ana', 8000], ['Beto', -4000], ['Caro', -4000]]));
});

test('quien pagó sin participar recupera todo', () => {
  const saldos = calcularSaldos([
    { descripcion: 'Regalo', monto: 6000, pagadoPor: 'Ana', entre: ['Beto', 'Caro'] },
  ]);
  assert.deepEqual(saldos, new Map([['Ana', 6000], ['Beto', -3000], ['Caro', -3000]]));
});
