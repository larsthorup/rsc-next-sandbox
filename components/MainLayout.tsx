import { type PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <main className="server-component">
      <Header />
      <div>
        <Sidebar />
        <section>{children}</section>
      </div>
      <Footer />
    </main>
  );
}
