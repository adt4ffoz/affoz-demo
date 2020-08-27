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
      <div className="nav__container">
        <div className="nav__logo-menu">
          <Link to="/">
            <img
              src={pathname === "/" ? LogoWhite : LogoDart}
              alt=""
              className="nav__logo"
            />
          </Link>
          <ul className={isShow ? "nav__menu nav__menu--show" : "nav__menu"}>
            <Link
              to="/about"
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
        </div>

        <div
          className={isShow ? "nav__action nav__action--show" : "nav__action"}
        >
          <Link to="/create-user">
            <button
              className={
                pathname === "/" ? "nav__btn nav__btn--home" : "nav__btn"
              }
            >
              create user
            </button>
          </Link>
          <Link to="/login">
            <button
              className={
                pathname === "/" ? "nav__btn nav__btn--home" : "nav__btn"
              }
            >
              login
            </button>
          </Link>          
        </div>
        <div
          className={isShow ? "nav__show " : "nav__show nav__show--reponsive"}
        >
          <button
            className={
              pathname === "/"
                ? "nav__btn nav__btn--reponsive"
                : "nav__btn nav__btn--reponsive nav__btn--nohome"
            }
            onClick={hanldeShowMenu}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
