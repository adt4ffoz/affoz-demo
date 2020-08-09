import React, { useEffect, useState } from "react";
import "./FiexdButton.scss";

export default function FiexdButton() {
  const [isShowToTop, setIsShowToTop] = useState(false);
  const [isShowToBottom, setIsShowToBottom] = useState(true);

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
    let heightPage = document.body.scrollHeight;
    let height = window.scrollY;
    let heightClient = window.innerHeight + height;
    if (height > 50) {
      setIsShowToTop(true);
    } else {
      setIsShowToTop(false);
    }

    if (heightClient > heightPage - 50) {
      setIsShowToBottom(false);
    } else {
      setIsShowToBottom(true);
    }
  };

  return (
    <div className="fixed">
      <div className="fixed__container">
        {isShowToBottom && (
          <button className="btn" onClick={handleMoveTopButtom}>
            <i className="fas fa-angle-down"></i>
          </button>
        )}
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
