import { horaLocal } from './fechas.ts';
import type { Commit } from './tipos.ts';

/** El valor que más se repite. En empate gana el primero en orden alfabético. */
function masFrecuente<T extends string | number>(valores: T[]): T | null {
  const conteo = new Map<T, number>();
  for (const v of valores) conteo.set(v, (conteo.get(v) ?? 0) + 1);
  let mejor: T | null = null;
  for (const [valor, veces] of conteo) {
    const actual = mejor === null ? 0 : conteo.get(mejor)!;
    if (veces > actual || (veces === actual && String(valor) < String(mejor))) mejor = valor;
  }
  return mejor;
}

export function lenguajeTop(commits: Commit[]): string | null {
  return masFrecuente(commits.map((c) => c.lenguaje));
}

export function repoTop(commits: Commit[]): string | null {
  return masFrecuente(commits.map((c) => c.repo));
}

/** La hora del día con más commits. */
export function horaFavorita(commits: Commit[]): number | null {
  return masFrecuente(commits.map((c) => horaLocal(c.fecha)));
}
