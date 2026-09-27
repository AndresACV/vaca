import type { Gasto } from './tipos.ts';

/** Cuánto le toca poner a cada persona de un gasto. */
export function dividir(gasto: Gasto): Map<string, number> {
  const { monto, entre } = gasto;
  if (entre.length === 0) {
    throw new Error(`"${gasto.descripcion}" no dice entre quiénes se divide`);
  }
  const parte = Math.round(monto / entre.length);
  return new Map(entre.map((persona) => [persona, parte]));
}
