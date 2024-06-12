import DreamList from './DreamList';
import RandomDreamButton from './RandomDreamButton';
import Outline from '../lib/Outline';
import { Link } from '../lib/router';

export default function Sidebar() {
  return (
    <div>
      <RandomDreamButton />
      <Outline text="Here are a few more dreams to check out:">
        <DreamList />
      </Outline>
      <Link href="new">
        Add your own
      </Link>
    </div>
  );
}
