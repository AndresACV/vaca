import { horaFavorita, lenguajeTop, repoTop } from './ranking.ts';
import { diasActivos, rachaMasLarga } from './rachas.ts';
import type { Historial, Wrapped } from './tipos.ts';

export function armarWrapped({ persona, anio, commits }: Historial): Wrapped {
  return {
    persona,
    anio,
    commits: commits.length,
    diasActivos: diasActivos(commits).length,
    racha: rachaMasLarga(commits),
    lenguajeTop: lenguajeTop(commits),
    repoTop: repoTop(commits),
    horaFavorita: horaFavorita(commits),
    lineasAgregadas: commits.reduce((total, c) => total + c.agregadas, 0),
  };
}
