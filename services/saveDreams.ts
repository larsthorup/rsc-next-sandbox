import 'server-only';
import { writeFile } from 'fs/promises';
import type { Dream } from '../types/Dream';

export async function saveDreams(dreams: Dream[]) {
  await writeFile('data/dreams.json', JSON.stringify(dreams, null, 2), 'utf-8');
}
