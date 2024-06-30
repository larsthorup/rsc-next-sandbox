'use client';

import { type PropsWithChildren, useState } from "react";

interface RefresherProps extends PropsWithChildren {
  content: JSX.Element,
  refresh: () => Promise<JSX.Element>;
}
export default function Refresher({ refresh, content: initialContent }: RefresherProps) {
  const [content, setContent] = useState(initialContent);
  const onClick = async function () {
    setContent(await refresh());
  }
  return (
    <div className="client-component">
      <button onClick={onClick}>Refresh</button>
      {content}
    </div>
  );
}