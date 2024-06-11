import 'server-only';
import { readFile } from 'fs/promises';

export async function getRandomDream() {
  const dreams = JSON.parse(await readFile('data/dreams.json', 'utf-8'));
  const randomRowNumber = Math.floor(Math.random() * dreams.length);
  return dreams[randomRowNumber];
}
