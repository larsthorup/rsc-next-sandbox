import 'server-only';
import { readFile } from 'fs/promises';
import type { Dream } from '../types/Dream';

export async function getDreams() {
  const dreams: Dream[] = JSON.parse(await readFile('data/dreams.json', 'utf-8'));
  return dreams;
}
