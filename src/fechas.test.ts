import assert from 'node:assert/strict';
import { test } from 'node:test';
import { diaLocal, diaSiguiente, horaLocal } from './fechas.ts';

test('un commit de mañana cuenta en su día', () => {
  assert.equal(diaLocal('2025-03-10T09:30:00-06:00'), '2025-03-10');
});

test('un commit de noche cuenta en su día, no en el siguiente', () => {
  assert.equal(diaLocal('2025-03-05T21:30:00-06:00'), '2025-03-05');
});

test('la hora es la que escribió quien hizo el commit', () => {
  assert.equal(horaLocal('2025-03-05T21:30:00-06:00'), 21);
});

test('el día siguiente cruza meses y años', () => {
  assert.equal(diaSiguiente('2025-02-28'), '2025-03-01');
  assert.equal(diaSiguiente('2024-12-31'), '2025-01-01');
});
