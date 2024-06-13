'use client';

import { createContext, useContext, useState } from "react";

interface RootRouteContextProps {
  invalidateRoot: () => void;
  root: JSX.Element;
}
const RootRouteContext = createContext<RootRouteContextProps>({
  invalidateRoot: () => {},
  root: <></>,
});

interface RootRouterProps extends React.PropsWithChildren<{}> {
  getRoot: () => Promise<JSX.Element>;
  root: JSX.Element;
}
export function RootRouterProvider({
  getRoot,
  root: initialRoot,
  children,
}: RootRouterProps) {
  const [root, setRoot] = useState(initialRoot);
  async function invalidateRoot() {
    const newRoot = await getRoot();
    setRoot(newRoot);
  }
  return (
    <RootRouteContext.Provider value={{ invalidateRoot, root }}>
      {children}
    </RootRouteContext.Provider>
  );
}

export function RootRouterPage() {
  const { root } = useContext(RootRouteContext);
  return root;
}

export function useNavigate() {
  const { invalidateRoot: invalidateRoot } = useContext(RootRouteContext);
  return invalidateRoot;
}
