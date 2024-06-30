import DreamList from "../components/DreamList";

export default async function refreshDreamList(): Promise<JSX.Element> {
  'use server';
  return <DreamList />;
}
