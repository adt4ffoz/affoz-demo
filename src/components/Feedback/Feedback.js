import React from "react";
import "./Feedback.scss";

export default function Feedback({ url }) {
  return (
    <div className="feedback">
      <img src={url} alt="" className="feedback__user" />
      <h2 className="feedback__name">Liam Emma</h2>
      <p className="feedback__content">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia
      </p>
    </div>
  );
}
