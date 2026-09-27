import { dividir } from './dividir.ts';
import type { Gasto } from './tipos.ts';

/**
 * El saldo de cada persona después de todos los gastos.
 * Positivo: le deben. Negativo: debe.
 */
export function calcularSaldos(gastos: Gasto[]): Map<string, number> {
  const saldos = new Map<string, number>();
  const sumar = (persona: string, monto: number) =>
    saldos.set(persona, (saldos.get(persona) ?? 0) + monto);

  for (const gasto of gastos) {
    sumar(gasto.pagadoPor, gasto.monto);
    for (const [persona, parte] of dividir(gasto)) {
      sumar(persona, -parte);
    }
  }
  return saldos;
}
