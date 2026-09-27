# vaca

Dividí los gastos de un paseo y sabé quién le debe a quién.

## Requisitos

Node.js 22.18 o más reciente. No hay dependencias: no hace falta `npm install`.

```bash
node --version
```

## Uso

```bash
npm start   # lee gastos.json e imprime el saldo de cada persona
npm test    # corre las pruebas
```

`gastos.json` es una lista de gastos. Cada gasto dice cuánto costó (en colones, sin céntimos), quién lo pagó y entre quiénes se divide.

## Estructura

| Archivo | Qué hace |
|---|---|
| `src/dividir.ts` | Cuánto le toca poner a cada persona de un gasto |
| `src/saldos.ts` | El saldo de cada persona después de todos los gastos |
| `src/liquidar.ts` | Las transferencias que dejan a todos en cero |
| `src/formato.ts` | Formato de montos en colones |
| `src/cli.ts` | El comando que corre `npm start` |
