'use client';

import { createContext, useContext, useState } from "react";

interface RouteContextProps {
  navigatePage: (route: string) => void;
  invalidateRoot: () => void;
  page: JSX.Element;
  root: JSX.Element;
}
const RouteContext = createContext<RouteContextProps>({
  navigatePage: () => {},
  invalidateRoot: () => {},
  page: <></>,
  root: <></>,
});

interface ClientRouterProps extends React.PropsWithChildren<{}> {
  getPage: (route: string) => Promise<JSX.Element>;
  getRoot: (route: string) => Promise<JSX.Element>;
  route: string;
  page: JSX.Element;
  root: JSX.Element;
}
export function ClientRouterProvider({
  getPage,
  getRoot,
  route: initialRoute,
  page: initialPage,
  root: initialRoot,
  children,
}: ClientRouterProps) {
  const [route, setRoute] = useState(initialRoute);
  const [page, setPage] = useState(initialPage);
  const [root, setRoot] = useState(initialRoot);
  async function navigatePage(newRoute: string) {
    setRoute(newRoute);
    const newPage = await getPage(newRoute);
    setPage(newPage);
  }
  async function invalidateRoot() {
    const newRoot = await getRoot(route);
    setRoot(newRoot);
  }
  return (
    <RouteContext.Provider value={{ navigatePage, invalidateRoot, page, root }}>
      {children}
    </RouteContext.Provider>
  );
}

export function ClientRouterRoot() {
  const { root } = useContext(RouteContext);
  return root;
}

export function ClientRouterPage() {
  const { page } = useContext(RouteContext);
  return page;
}

export function useNavigatePage() {
  const { navigatePage } = useContext(RouteContext);
  return navigatePage;
}

export function useInvalidateRoot() {
  const { invalidateRoot: invalidateRoot } = useContext(RouteContext);
  return invalidateRoot;
}

interface LinkProps extends React.PropsWithChildren<{ href: string }> {}

export function Link({ href, children }: LinkProps) {
  const navigatePage = useNavigatePage();
  return (
    <a onClick={() => navigatePage(href)} className="client-component">
      {children}
    </a>
  );
}
