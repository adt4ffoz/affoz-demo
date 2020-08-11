import React from "react";
import "../Footer/Footer.scss";

export default function GenenalTitle({ title }) {
  return (
    <div>
      <h1 className="footer__title">{title}</h1>
    </div>
  );
}
