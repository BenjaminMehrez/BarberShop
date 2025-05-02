import React from "react";
import Footer from "../components/navigation/Footer";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="layout">
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
