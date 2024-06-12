'use server';

import { getDreams } from './getDreams';
import { saveDreams } from './saveDreams';

export async function deleteDream(id: string) {
  const dreams = await getDreams();
  const remainingDreams = dreams.filter((dream) => dream.id !== id);
  await saveDreams(remainingDreams);
}
