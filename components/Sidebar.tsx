import DreamList from './DreamList';
import RandomDreamButton from './RandomDreamButton';
import Outline from '../lib/Outline';
import { Link } from '../router/PageRouter';

export default function Sidebar() {
  return (
    <section className="server-component">
      <RandomDreamButton />
      <Outline text="Here are a few more dreams to check out:">
        <DreamList />
      </Outline>
      <Link href="new">
        Add your own
      </Link>
    </section>
  );
}
