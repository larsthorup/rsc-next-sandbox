'use client';

import { createContext, useContext, useState } from "react";

interface RouteContextProps {
  navigatePage: (route: string) => void;
  page: JSX.Element;
}
const RouteContext = createContext<RouteContextProps>({
  navigatePage: () => {},
  page: <></>,
});

interface PageRouterProps extends React.PropsWithChildren<{}> {
  getPage: (route: string) => Promise<JSX.Element>;
  route: string;
  page: JSX.Element;
}
export function PageRouterProvider({
  getPage,
  route: initialRoute,
  page: initialPage,
  children,
}: PageRouterProps) {
  const [route, setRoute] = useState(initialRoute);
  const [page, setPage] = useState(initialPage);
  async function navigatePage(newRoute: string) {
    setRoute(newRoute);
    const newPage = await getPage(newRoute);
    setPage(newPage);
  }
  return (
    <RouteContext.Provider value={{ navigatePage, page }}>
      {children}
    </RouteContext.Provider>
  );
}

export function PageRouterPage() {
  const { page } = useContext(RouteContext);
  return page;
}

export function useNavigate() {
  const { navigatePage } = useContext(RouteContext);
  return navigatePage;
}

interface LinkProps extends React.PropsWithChildren<{ href: string }> {}

export function Link({ href, children }: LinkProps) {
  const navigatePage = useNavigate();
  return (
    <a onClick={() => navigatePage(href)} className="client-component">
      {children}
    </a>
  );
}
