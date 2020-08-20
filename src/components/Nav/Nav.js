import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
//image
import LogoDart from "../../assets/images/logo-dark.png";
import LogoWhite from "../../assets/images/logo.png";
//scss
import "./Nav.scss";

export default function Nav() {
  const [isShow, setIsShow] = useState(true);
  let location = useLocation();
  let pathname = location.pathname;

  const hanldeShowMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={pathname === "/" ? "nav nav--home" : "nav"}>
      <div className="nav__container-logo">
        <Link to="/">
          <img
            src={pathname === "/" ? LogoWhite : LogoDart}
            alt=""
            className="nav__logo"
          />
        </Link>
        <button
          className="nav__btn nav__btn--reponsive"
          onClick={hanldeShowMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <ul className={isShow ? "nav__menu nav__menu--show" : "nav__menu"}>
        <Link
          to="/"
          className={
            pathname === "/" ? "nav__link nav__link--home" : "nav__link"
          }
        >
          ABOUT
        </Link>
        <Link
          to="/"
          className={
            pathname === "/" ? "nav__link nav__link--home" : "nav__link"
          }
        >
          PRICING
        </Link>
        <Link
          to="/career"
          className={
            pathname === "/" ? "nav__link nav__link--home" : "nav__link"
          }
        >
          JOBS
        </Link>
        <Link
          to="/"
          className={
            pathname === "/" ? "nav__link nav__link--home" : "nav__link"
          }
        >
          CONTACT
        </Link>
        <Link
          to="/"
          className={
            pathname === "/" ? "nav__link nav__link--home" : "nav__link"
          }
        >
          VIDEOS
        </Link>
      </ul>
      <div className={isShow ? "nav__action nav__action--show" : "nav__action"}>
        <button
          className={pathname === "/" ? "nav__btn nav__btn--home" : "nav__btn"}
        >
          sign-in
        </button>
        <button
          className={pathname === "/" ? "nav__btn nav__btn--home" : "nav__btn"}
        >
          login
        </button>
      </div>
    </div>
  );
}
