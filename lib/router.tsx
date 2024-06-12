'use client';

import { createContext, useContext, useState } from 'react';

interface RouteContextProps {
  navigate: (route: string) => void;
  page: JSX.Element;
}
const RouteContext = createContext<RouteContextProps>({ navigate: () => {}, page: <></> });

interface ClientRouterProps extends React.PropsWithChildren<{}> {
  getPage: (route: string) => Promise<JSX.Element>;
  route: string;
  page: JSX.Element;
}
export function ClientRouterProvider({
  getPage,
  route: initialRoute,
  page: initialPage,
  children,
}: ClientRouterProps) {
  const [route, setRoute] = useState(initialRoute);
  const [page, setPage] = useState(initialPage);
  async function navigate (newRoute: string) {
    setRoute(newRoute);
    const newPage = await getPage(newRoute);
    setPage(newPage);
  };
  return <RouteContext.Provider value={{ navigate, page }}>{children}</RouteContext.Provider>;
}

export function ClientRouterPage() {
  const { page } = useContext(RouteContext);
  return page;
}

export function useNavigate() {
  const { navigate } = useContext(RouteContext);
  return navigate;
}

interface LinkProps extends React.PropsWithChildren<{ href: string }>{}

export function Link({ href, children }: LinkProps) {
  const navigate = useNavigate();
  return <a onClick={() => navigate(href)}>{children}</a>
}