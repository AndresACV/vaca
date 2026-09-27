import assert from 'node:assert/strict';
import { test } from 'node:test';
import { liquidar } from './liquidar.ts';

test('empareja al que más debe con al que más le deben', () => {
  const saldos = new Map([['Ana', 7000], ['Beto', -5000], ['Caro', -2000]]);
  assert.deepEqual(liquidar(saldos), [
    { de: 'Beto', para: 'Ana', monto: 5000 },
    { de: 'Caro', para: 'Ana', monto: 2000 },
  ]);
});

test('si todos están en cero no hay transferencias', () => {
  assert.deepEqual(liquidar(new Map([['Ana', 0], ['Beto', 0]])), []);
});
