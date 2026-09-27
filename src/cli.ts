import { readFileSync } from 'node:fs';
import { colones } from './formato.ts';
import { calcularSaldos } from './saldos.ts';
import type { Gasto } from './tipos.ts';

const archivo = process.argv[2] ?? 'gastos.json';
const gastos: Gasto[] = JSON.parse(readFileSync(archivo, 'utf8'));
const saldos = calcularSaldos(gastos);

console.log(`Vaca: ${archivo} (${gastos.length} gastos, ${saldos.size} personas)\n`);
console.log('Saldos');
for (const [persona, saldo] of saldos) {
  const estado = saldo >= 0 ? 'le deben' : 'debe    ';
  console.log(`  ${persona.padEnd(8)} ${estado}  ${colones(Math.abs(saldo))}`);
}

const descuadre = [...saldos.values()].reduce((a, b) => a + b, 0);
console.log(
  descuadre === 0
    ? '\n✓ Los saldos cuadran.'
    : `\n✗ Los saldos no cuadran: la diferencia es de ${colones(descuadre)}.`,
);
