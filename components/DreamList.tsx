import { getDreams } from "../services/getDreams";
import { Link } from "../lib/router";

export default async function DreamList() {
  const dreams = await getDreams();
  const dreamsSorted = dreams.sort((a, b) => {
    return b.createdAt > a.createdAt ? 1 : -1;
  });
  return (
    <ul>
      {dreamsSorted.map(({ id, name }) => {
        return (
          <li key={id}>
            <Link href={id}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
