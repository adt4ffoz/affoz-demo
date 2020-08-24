import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./BannerImage.scss";

export default function BannerImage({ img, before, mid, after }) {
  AOS.init();

  return (
    <div className="banner" style={{ backgroundImage: `url(${img})` }}>
      <div className="banner__over">
        <div className="banner__content">
          {before && (
            <b className="banner__before" data-aos="fade-left">
              {before}
            </b>
          )}
          {after ? null : <br />}
          <span className="banner__mid" data-aos="fade-left">
            {mid}
          </span>
          <br />
          <b className="banner__after" data-aos="fade-left">
            {after}
          </b>
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
