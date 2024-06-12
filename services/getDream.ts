import 'server-only';
import { getDreams } from './getDreams';

export const getDream = async (id: string) => {
  const dreams = await getDreams();
  const dream = dreams.find((dream) => dream.id === id);
  return dream;
};
