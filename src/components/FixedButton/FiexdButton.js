import React, { useEffect, useState } from "react";
import "./FiexdButton.scss";

export default function FiexdButton() {
  const [isShowToTop, setIsShowToTop] = useState(false);

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleMoveTopButtom = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    let height = window.scrollY;
    if (height > 50) {
      setIsShowToTop(true);
    } else {
      setIsShowToTop(false);
    }
  };

  return (
    <div className="fixed">
      <div className="fixed__container">
        <button className="btn" onClick={handleMoveTopButtom}>
          <i className="fas fa-angle-down"></i>
        </button>
      </div>
      <div className="fixed__container">
        {isShowToTop && (
          <button className="btn btn--top" onClick={handleMoveToTop}>
            <i className="fas fa-arrow-up"></i>
          </button>
        )}
      </div>
    </div>
  );
}
