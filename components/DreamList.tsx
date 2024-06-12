import { getDreams } from "../lib/getDreams";
// import Link from './Link';

export default async function DreamList() {
  const dreams = await getDreams();

  return (
    <ul>
      {dreams
        .sort((a, b) => {
          return b.createdAt > a.createdAt ? 1 : -1;
        })
        .map(({ id, name }) => {
          return (
            <li key={id}>
              {/* <Link href={id}> */}
                {name}
                {/* </Link> */}
            </li>
          );
        })}
    </ul>
  );
}
