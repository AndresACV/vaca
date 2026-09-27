export type Gasto = {
  descripcion: string;
  /** En colones, sin céntimos. */
  monto: number;
  pagadoPor: string;
  /** Las personas que comparten el gasto. Puede no incluir a quien pagó. */
  entre: string[];
};

export type Transferencia = {
  de: string;
  para: string;
  monto: number;
};
