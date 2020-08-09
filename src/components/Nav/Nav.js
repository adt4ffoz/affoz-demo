import React from "react";
import Logo from "../../assets/images/logo.png";
import "./Nav.scss";

export default function Nav() {
  return (
    <div className="nav">
      <img src={Logo} alt="" className="nav__logo" />
      <ul className="nav__menu">
        <li className="nav__link">ABOUT</li>
        <li className="nav__link">PRICING</li>
        <li className="nav__link">CAREER</li>
        <li className="nav__link">CONTACT</li>
        <li className="nav__link">VIDEOS</li>
      </ul>
      <div className="nav__action">
        <button className="nav__btn">SIGNIN</button>
        <button className="nav__btn">LOGIN</button>
      </div>
    </div>
  );
}
