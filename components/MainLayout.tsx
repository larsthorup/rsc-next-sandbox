import { type PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <main>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </main>
  );
}
