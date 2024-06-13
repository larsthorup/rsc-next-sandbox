import './global.css'
import { type PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en" className="server-component">
      <body>{children}</body>
    </html>
  );
}
