import { readFileSync } from 'node:fs';
import { diaYMes, hora, numero, plural } from './formato.ts';
import type { Historial } from './tipos.ts';
import { armarWrapped } from './wrapped.ts';

const archivo = process.argv[2] ?? 'commits.json';
const historial: Historial = JSON.parse(readFileSync(archivo, 'utf8'));
const w = armarWrapped(historial);

const racha = w.racha.desde
  ? `${plural(w.racha.dias, 'día', 'días')} (del ${diaYMes(w.racha.desde)} al ${diaYMes(w.racha.hasta!)})`
  : 'todavía no hay';
const nocturna = w.horaFavorita !== null && (w.horaFavorita >= 21 || w.horaFavorita < 5);

console.log(`\n  Tu ${w.anio} en commits · ${w.persona}`);
console.log('  ' + '─'.repeat(44));
console.log(`  ${plural(w.commits, 'commit', 'commits')} en ${plural(w.diasActivos, 'día', 'días')}`);
console.log(`  🔥 Racha más larga: ${racha}`);
console.log(`  💬 Lenguaje top: ${w.lenguajeTop ?? '-'}`);
console.log(`  📦 Repo top: ${w.repoTop ?? '-'}`);
console.log(`  🌙 Hora favorita: ${w.horaFavorita === null ? '-' : hora(w.horaFavorita)}${nocturna ? ' (sos de noche)' : ''}`);
console.log(`  ➕ ${numero(w.lineasAgregadas)} líneas agregadas\n`);
