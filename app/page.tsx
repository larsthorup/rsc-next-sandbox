import { PropsWithChildren } from "react";
import DreamsPage from "../components/DreamsPage";

function Layout({children}: PropsWithChildren<{}>) {
  return <div>{children}</div>;
}

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
  return <Layout>{page}</Layout>;
}

export default async function RootPage() {
  const route = 'all';
  const page = await getPage(route);
  return page;
}