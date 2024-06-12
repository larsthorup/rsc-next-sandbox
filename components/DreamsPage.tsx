import { Link } from '../lib/router';
import { getRandomDream } from '../service/getRandomDream';

export default async function DreamsPage() {
  const dream = await getRandomDream();

  if (!dream) {
    return <div>No dreams found</div>;
  }

  return (
    <div>
      <p>Here is a random dream:</p>
      <p>{dream.content}</p>
      <Link href={dream.id}>{`"${dream.name}" Permalink`}</Link>
    </div>
  );
}
