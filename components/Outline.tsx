'use client';

import { type PropsWithChildren, useState } from "react";

interface OutlineProps extends PropsWithChildren {
  text: string;
}
export default function Outline({ text, children }: OutlineProps) {
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = () => setExpanded((prev) => !prev);
  return (
    <>
      <p onClick={toggleExpanded}>{text}</p>
      {expanded && children}
    </>
  );
}