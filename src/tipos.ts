export type Commit = {
  /** Fecha ISO 8601 con el desfase de donde se hizo el commit, por ejemplo 2025-03-10T21:30:00-06:00. */
  fecha: string;
  repo: string;
  lenguaje: string;
  agregadas: number;
  borradas: number;
  mensaje: string;
};

export type Historial = {
  persona: string;
  anio: number;
  commits: Commit[];
};

export type Racha = {
  dias: number;
  desde: string | null;
  hasta: string | null;
};

export type Wrapped = {
  persona: string;
  anio: number;
  commits: number;
  diasActivos: number;
  racha: Racha;
  lenguajeTop: string | null;
  repoTop: string | null;
  horaFavorita: number | null;
  lineasAgregadas: number;
};
