const numeros = new Intl.NumberFormat('es-CR');
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

export function numero(n: number): string {
  return numeros.format(n);
}

/** "1 día", "12 días". */
export function plural(n: number, singular: string, pluralForma: string): string {
  return `${numero(n)} ${n === 1 ? singular : pluralForma}`;
}

/** "2025-03-14" → "14 de marzo". */
export function diaYMes(dia: string): string {
  return `${Number(dia.slice(8, 10))} de ${meses[Number(dia.slice(5, 7)) - 1]}`;
}

/** 22 → "22:00". */
export function hora(h: number): string {
  return `${String(h).padStart(2, '0')}:00`;
}
