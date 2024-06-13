'use client';

import { type PropsWithChildren, useState } from "react";

interface OutlineProps extends PropsWithChildren {
  text: string;
}
export default function Outline({ text, children }: OutlineProps) {
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = () => setExpanded((prev) => !prev);
  const symbol = expanded ? '▼' : '▶';
  return (
    <div className="client-component">
      <p onClick={toggleExpanded}>{`${text} ${symbol}`}</p>
      {expanded && children}
    </div>
  );
}