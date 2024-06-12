import DreamPage from "../components/DreamPage";
import DreamsPage from "../components/DreamsPage";
import MainLayout from "../components/MainLayout";
import { ClientRouterPage, ClientRouterProvider } from "../lib/router";

async function getPage(route: string): Promise<JSX.Element> {
  'use server';
  const page = (() => { switch (route) {
    case 'all':
      return <DreamsPage />;
    // case 'new':
    //   return <NewDreamPage />;
    default:
      return <DreamPage id={route} />;
  }})();
  return <MainLayout>{page}</MainLayout>;
}

export default async function RootPage() {
  const route = 'all';
  const page = await getPage(route);
  return (
    <ClientRouterProvider getPage={getPage} page={page} route={route}>
      <ClientRouterPage />
    </ClientRouterProvider>
  );
}