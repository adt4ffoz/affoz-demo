import React from "react";
import "./Footer.scss";

//img
import ImageTH from "../../assets/images/th-true-milk.png";
import ImageVietGap from "../../assets/images/viet-gap.jpg";
import ImageGap from "../../assets/images/gap.jpg";
import ImageCP from "../../assets/images/cp.jpg";
import ImageDalat from "../../assets/images/datlat.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container-partner">
        <img className="footer__image" src={ImageTH} alt="" />
        <img className="footer__image" src={ImageVietGap} alt="" />
        <img className="footer__image" src={ImageGap} alt="" />
        <img className="footer__image" src={ImageCP} alt="" />
        <img className="footer__image" src={ImageDalat} alt="" />
      </div>
      <div className="footer__info">
        <div className="footer__policy">
          <h3 className="footer__policy-title">
            <b className="footer__domain">AFFOZ</b>.COM
          </h3>
          <div className="footer__container-link">
            <a className="footer__link" href="/">
              POLICY COMPANY
            </a>
            <a className="footer__link" href="/">
              POLICY DELIVERY
            </a>
            <a className="footer__link" href="/">
              POLICY SERVICE USES
            </a>
          </div>
        </div>
        <div className="footer__sub">
          <h4 className="footer__sub-title">Newsletter</h4>
          <form className="footer__form">
            <input className="footer__input" placeholder="Name" type="text" />
            <input className="footer__input" placeholder="Phone" type="text" />
            <input className="footer__input" placeholder="Mail" type="text" />
            <button className="footer__btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
