import React from "react";
import "./Button.scss";

export default function Button({ title, handleClick, type }) {
  return (
    <button className={`btn btn--${type}`} onClick={handleClick}>
      {title}
    </button>
  );
}
