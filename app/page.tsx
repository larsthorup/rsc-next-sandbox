import DreamPage from "../components/DreamPage";
import DreamsPage from "../components/DreamsPage";
import MainLayout from "../components/MainLayout";
import NewDreamPage from "../components/NewDreamPage";
import { ClientRouterRoot, ClientRouterPage, ClientRouterProvider } from "../lib/router";

async function getRoot(): Promise<JSX.Element> {
  'use server';
  return <MainLayout><ClientRouterPage /></MainLayout>;
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
  const layout = await getRoot();
  const page = await getPage(route);
  return (
    <ClientRouterProvider getPage={getPage} page={page} getRoot={getRoot} root={layout} route={route}>
      <ClientRouterRoot />
    </ClientRouterProvider>
  );
}
