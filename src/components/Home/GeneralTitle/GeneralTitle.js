import React from "react";
import "./GeneralTitle.scss";

export default function GeneralTitle({ title }) {
  return (
    <div>
      <h1 className="general-title">{title}</h1>
    </div>
  );
}
