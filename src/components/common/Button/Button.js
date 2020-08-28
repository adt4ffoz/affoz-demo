import React from "react";
import "./Button.scss";

export default function Button({
  title,
  handleClick,
  type,
  typeButton,
  status,
}) {
  return (
    <button
      className={`btn btn--${type} btn--${status}`}
      type={typeButton}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
