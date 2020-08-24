import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
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
  );
}
