import assert from 'node:assert/strict';
import { test } from 'node:test';
import { rachaMasLarga } from './rachas.ts';
import type { Commit } from './tipos.ts';

const commit = (fecha: string): Commit => ({
  fecha, repo: 'demo', lenguaje: 'TypeScript', agregadas: 1, borradas: 0, mensaje: 'demo',
});

test('cuenta los días seguidos con commits', () => {
  const racha = rachaMasLarga([
    commit('2025-04-01T10:00:00-06:00'),
    commit('2025-04-02T11:00:00-06:00'),
    commit('2025-04-03T09:00:00-06:00'),
    commit('2025-04-07T10:00:00-06:00'),
  ]);
  assert.deepEqual(racha, { dias: 3, desde: '2025-04-01', hasta: '2025-04-03' });
});

test('sin commits no hay racha', () => {
  assert.deepEqual(rachaMasLarga([]), { dias: 0, desde: null, hasta: null });
});
