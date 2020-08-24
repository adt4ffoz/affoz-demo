import React from "react";
import { useLocation } from "react-router-dom";
import "./styles.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

export default function MainLayout({ children }) {
  let location = useLocation();
  let pathname = location.pathname;

  return (
    <>
      <Nav />
      <div className={pathname === "/" ? "main-layout--home" : "main-layout"}>
        {children}
      </div>

      <Footer />
    </>
  );
}
