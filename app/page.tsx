import DreamsPage from "../components/DreamsPage";
import MainLayout from "../components/MainLayout";

async function getPage(route: string): Promise<JSX.Element> {
  'use server';
  const page = (() => { switch (route) {
    case 'all':
      return <DreamsPage />;
    // case 'new':
    //   return <NewDreamPage />;
    default:
      // return <DreamPage params={{ id: route }} />;
      return <div>404</div>;
  }})();
  return <MainLayout>{page}</MainLayout>;
}

export default async function RootPage() {
  const route = 'all';
  const page = await getPage(route);
  return page;
}