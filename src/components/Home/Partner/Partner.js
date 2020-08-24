import React from "react";
//img
import ImagePartner1 from "../../../assets/images/partner/farmx.jpg";
// import ImagePartner2 from "../../assets/images/partner/farmx.jpg";
// import ImagePartner3 from "../../assets/images/partner/farmx.jpg";
// import ImagePartner4 from "../../assets/images/partner/farmx.jpg";
// import ImagePartner5 from "../../assets/images/partner/farmx.jpg";
import "./Partner.scss";

export default function Partner() {
  return (
    <div>
      <div className="partner">
        <img className="partner__image" src={ImagePartner1} alt="" />
        {/* <img className="footer__image" src={ImagePartner2} alt="" />
        <img className="partner__image" src={ImagePartner3} alt="" />
        <img className="partner__image" src={ImagePartner4} alt="" />
        <img className="partner__image" src={ImagePartner5} alt="" /> */}
      </div>
    </div>
  );
}
