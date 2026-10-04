# dev-wrapped

Tu año en commits, al estilo Wrapped: cuántos commits hiciste, tu racha más larga, tu lenguaje y tu repo favoritos, y a qué hora programás.

## Requisitos

Node.js 22.18 o más reciente. No hay dependencias: no hace falta `npm install`.

```bash
node --version
```

## Uso

```bash
npm start   # lee commits.json e imprime el Wrapped
npm test    # corre las pruebas
```

`commits.json` trae el historial de una persona: su nombre, el año y la lista de commits. Cada commit tiene su fecha (con el desfase horario de donde se hizo), el repo, el lenguaje y cuántas líneas agregó y borró.

## Estructura

| Archivo | Qué hace |
|---|---|
| `src/fechas.ts` | El día y la hora de cada commit |
| `src/rachas.ts` | Los días activos y la racha más larga |
| `src/ranking.ts` | El lenguaje, el repo y la hora favoritos |
| `src/wrapped.ts` | Junta todo en el resumen del año |
| `src/formato.ts` | Números, plurales, fechas y horas para mostrar |
| `src/cli.ts` | El comando que corre `npm start` |
