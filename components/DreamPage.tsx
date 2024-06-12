import DeleteDreamButton from '../components/DeleteDreamButton';
import { getDream } from '../services/getDream';

interface DreamPageProps {
  id: string;
}
export default async function DreamPage({ id }: DreamPageProps) {
  const dream = await getDream(id);

  return (
    <div>
      <p>Heres your dream:</p>
      <p>{dream.content}</p>
      <DeleteDreamButton id={dream.id} />
    </div>
  );
}
