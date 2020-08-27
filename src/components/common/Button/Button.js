import React from "react";
import "./Button.scss";

export default function Button({ title, handleClick, type, typeButton }) {
  return (
    <button
      className={`btn btn--${type}`}
      type={typeButton}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
