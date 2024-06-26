import { getRandomDream } from '../services/getRandomDream';

export default async function DreamsPage() {
  const dream = await getRandomDream();

  if (!dream) {
    return <div>No dreams found</div>;
  }

  return (
    <div className="server-component">
      <p>Here is a random dream:</p>
      <p>{dream.content}</p>
    </div>
  );
}
