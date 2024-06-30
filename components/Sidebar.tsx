import RandomDreamButton from './RandomDreamButton';
import Outline from '../lib/Outline';
import { Link } from '../router/PageRouter';
import refreshDreamList from '../services/refreshDreamList';
import Refresher from '../lib/Refresher';

export default async function Sidebar() {
  const dreamList = await refreshDreamList();
  return (
    <section className="server-component">
      <RandomDreamButton />
      <Outline text="Here are a few more dreams to check out:">
        <Refresher content={dreamList} refresh={refreshDreamList} />
      </Outline>
      <Link href="new">
        Add your own
      </Link>
    </section>
  );
}
