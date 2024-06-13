import DreamPage from "../components/DreamPage";
import DreamsPage from "../components/DreamsPage";
import MainLayout from "../components/MainLayout";
import NewDreamPage from "../components/NewDreamPage";
import { PageRouterPage, PageRouterProvider } from "../router/PageRouter";
import { RootRouterPage, RootRouterProvider } from "../router/RootRouter";

async function getRoot(): Promise<JSX.Element> {
  'use server';
  return <MainLayout><PageRouterPage /></MainLayout>;
}

async function getPage(route: string): Promise<JSX.Element> {
  "use server";
  switch (route) {
    case "all":
      return <DreamsPage />;
    case "new":
      return <NewDreamPage />;
    default:
      return <DreamPage id={route} />;
  }
}

export default async function RootPage() {
  const route = "all";
  const root = await getRoot();
  const page = await getPage(route);
  return (
    <RootRouterProvider getRoot={getRoot} root={root}>
      <PageRouterProvider getPage={getPage} page={page} route={route}>
        <RootRouterPage />
      </PageRouterProvider>
    </RootRouterProvider>
  );
}
