import React, { useEffect, useState } from "react";
import { ChevronDown, ArrowUp } from "react-feather";

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
          <button
            className="fixed__btn fixed__btn--bottom"
            onClick={handleMoveTopButtom}
          >
            <ChevronDown size={50} />
          </button>
        )}
      </div>
      <div className="fixed__container">
        {isShowToTop && (
          <button
            className="fixed__btn fixed__btn--top"
            onClick={handleMoveToTop}
          >
            <ArrowUp />
          </button>
        )}
      </div>
    </div>
  );
}
