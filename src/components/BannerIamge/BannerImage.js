import React from "react";

import "./BannerImage.scss";

export default function BannerImage({ img, before, mid, after }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${img})` }}>
      <div className="banner__over">
        <p className="banner__content">
          <b className="banner__before">{before}</b>
          <span className="banner__mid">{mid}</span>
          <br />
          <b className="banner__after">{after}</b>
        </p>
        <button className="banner__btn">LEARN MORE</button>
      </div>
    </div>
  );
}
