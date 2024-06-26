import { getDreams } from "../services/getDreams";
import { Link } from "../router/PageRouter";

export default async function DreamList() {
  const dreams = await getDreams();
  const dreamsSorted = dreams.sort((a, b) => {
    return b.createdAt > a.createdAt ? 1 : -1;
  });
  return (
    <div className="server-component">
      <ul>
        {dreamsSorted.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link href={id}><span className="server-component">{name}</span></Link>
            </li>
          );
        })}
      </ul>
      <small>{`(${new Date().toISOString().substring(11, 19)})`}</small>
    </div>
  );
}
