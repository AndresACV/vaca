import { diaLocal, diaSiguiente } from './fechas.ts';
import type { Commit, Racha } from './tipos.ts';

/** Los días distintos en que hubo al menos un commit, ordenados. */
export function diasActivos(commits: Commit[]): string[] {
  return [...new Set(commits.map((c) => diaLocal(c.fecha)))].sort();
}

/** La mayor cantidad de días seguidos con al menos un commit. */
export function rachaMasLarga(commits: Commit[]): Racha {
  const dias = diasActivos(commits);
  let mejor: Racha = { dias: 0, desde: null, hasta: null };
  let inicio = 0;
  for (let i = 0; i < dias.length; i++) {
    if (i > 0 && dias[i] !== diaSiguiente(dias[i - 1])) inicio = i;
    const largo = i - inicio + 1;
    if (largo > mejor.dias) mejor = { dias: largo, desde: dias[inicio], hasta: dias[i] };
  }
  return mejor;
}
