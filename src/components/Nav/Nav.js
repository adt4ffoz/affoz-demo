import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import "./Nav.scss";

export default function Nav() {
  const [isShow, setIsShow] = useState(false);

  const hanldeShowMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="nav">
      <div className="nav__container-logo">
        <img src={Logo} alt="" className="nav__logo" />
        <button
          className="nav__btn nav__btn--reponsive"
          onClick={hanldeShowMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div
        className={
          isShow
            ? "nav__container-menu nav__container-menu--hidden"
            : "nav__container-menu nav__container-menu--show"
        }
      >
        <ul className="nav__menu">
          <li className="nav__link">ABOUT</li>
          <li className="nav__link">PRICING</li>
          <li className="nav__link">CAREER</li>
          <li className="nav__link">CONTACT</li>
          <li className="nav__link">VIDEOS</li>
        </ul>
        <div className="nav__action">
          <button className="nav__btn">sign-in</button>
          <button className="nav__btn">login</button>
        </div>
      </div>
    </div>
  );
}
