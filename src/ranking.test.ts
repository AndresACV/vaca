import assert from 'node:assert/strict';
import { test } from 'node:test';
import { horaFavorita, lenguajeTop } from './ranking.ts';
import type { Commit } from './tipos.ts';

const commit = (fecha: string, lenguaje: string): Commit => ({
  fecha, repo: 'demo', lenguaje, agregadas: 1, borradas: 0, mensaje: 'demo',
});

test('el lenguaje top es el de más commits; en empate, el primero alfabéticamente', () => {
  assert.equal(lenguajeTop([commit('2025-01-01T10:00:00-06:00', 'Python'), commit('2025-01-02T10:00:00-06:00', 'Go')]), 'Go');
  assert.equal(lenguajeTop([
    commit('2025-01-01T10:00:00-06:00', 'Python'),
    commit('2025-01-02T10:00:00-06:00', 'Python'),
    commit('2025-01-03T10:00:00-06:00', 'Go'),
  ]), 'Python');
});

test('la hora favorita es la de más commits', () => {
  assert.equal(horaFavorita([
    commit('2025-01-01T22:10:00-06:00', 'Go'),
    commit('2025-01-02T22:40:00-06:00', 'Go'),
    commit('2025-01-03T09:00:00-06:00', 'Go'),
  ]), 22);
});
