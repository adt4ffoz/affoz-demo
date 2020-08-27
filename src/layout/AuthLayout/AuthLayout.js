import React from "react";
import "../MainLayout/styles.scss";
import Nav from "../../components/Nav/Nav";

export default function AuthLayout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <div className="main-layout">{children}</div>
    </div>
  );
}
