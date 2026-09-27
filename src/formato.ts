const formato = new Intl.NumberFormat('es-CR', {
  style: 'currency',
  currency: 'CRC',
  maximumFractionDigits: 0,
});

export function colones(monto: number): string {
  return formato.format(monto);
}
