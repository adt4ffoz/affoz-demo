import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./BannerImage.scss";

export default function BannerImage({ img, before, mid, after }) {
  AOS.init();

  return (
    <div className="banner" style={{ backgroundImage: `url(${img})` }}>
      <div className="banner__over">
        <div className="banner__content" data-aos="fade-left">
          {before && <b className="banner__before">{before}</b>}
          {after ? null : <br />}
          <span className="banner__mid">{mid}</span>
          <br />
          <b className="banner__after">{after}</b>
          <br />
          {before && after ? (
            <button className="banner__btn" data-aos="fade-left">
              LEARN MORE
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
