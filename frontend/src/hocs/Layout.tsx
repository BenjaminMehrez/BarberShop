import React from "react";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
