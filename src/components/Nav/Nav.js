import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo-dark.png";
import "./Nav.scss";

export default function Nav() {
  const [isShow, setIsShow] = useState(false);

  const hanldeShowMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="nav">
      <div className="nav__container-logo">
        <Link to="/">
          <img src={Logo} alt="" className="nav__logo" />
        </Link>
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
          <Link className="nav__link">ABOUT</Link>
          <Link className="nav__link">PRICING</Link>
          <Link to="/career" className="nav__link">
            JOBS
          </Link>
          <Link className="nav__link">CONTACT</Link>
          <Link className="nav__link">VIDEOS</Link>
        </ul>
        <div className="nav__action">
          <button className="nav__btn">sign-in</button>
          <button className="nav__btn">login</button>
        </div>
      </div>
    </div>
  );
}
