import 'server-only';
import { readFile } from 'fs/promises';

interface Dream {
  id: string;
  createdAt: string;
  name: string;
  content: string;
}

export async function getDreams() {
  const dreams: Dream[] = JSON.parse(await readFile('data/dreams.json', 'utf-8'));
  return dreams;
}
