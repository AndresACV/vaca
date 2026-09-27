import type { Transferencia } from './tipos.ts';

/**
 * Las transferencias que dejan a todos en cero, emparejando siempre
 * al que más debe con al que más le deben.
 */
export function liquidar(saldos: Map<string, number>): Transferencia[] {
  const porMonto = (a: [string, number], b: [string, number]) =>
    b[1] - a[1] || a[0].localeCompare(b[0]);
  const acreedores = [...saldos].filter(([, s]) => s > 0).sort(porMonto);
  const deudores = [...saldos]
    .filter(([, s]) => s < 0)
    .map(([p, s]): [string, number] => [p, -s])
    .sort(porMonto);

  const transferencias: Transferencia[] = [];
  let i = 0;
  let j = 0;
  while (i < deudores.length && j < acreedores.length) {
    const monto = Math.min(deudores[i][1], acreedores[j][1]);
    transferencias.push({ de: deudores[i][0], para: acreedores[j][0], monto });
    deudores[i][1] -= monto;
    acreedores[j][1] -= monto;
    if (deudores[i][1] === 0) i++;
    if (acreedores[j][1] === 0) j++;
  }
  return transferencias;
}
