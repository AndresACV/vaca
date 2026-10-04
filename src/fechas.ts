/** El día del commit, como YYYY-MM-DD. */
export function diaLocal(fecha: string): string {
  return new Date(fecha).toISOString().slice(0, 10);
}

/** La hora del commit (0 a 23), tal como la escribió quien lo hizo. */
export function horaLocal(fecha: string): number {
  return Number(fecha.slice(11, 13));
}

/** El día siguiente a una fecha YYYY-MM-DD. */
export function diaSiguiente(dia: string): string {
  const fecha = new Date(`${dia}T00:00:00Z`);
  fecha.setUTCDate(fecha.getUTCDate() + 1);
  return fecha.toISOString().slice(0, 10);
}
