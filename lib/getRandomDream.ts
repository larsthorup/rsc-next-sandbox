import 'server-only';
import { getDreams } from './getDreams';

export async function getRandomDream() {
  const dreams = await getDreams();
  const randomRowNumber = Math.floor(Math.random() * dreams.length);
  return dreams[randomRowNumber];
}
