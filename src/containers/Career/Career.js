import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../assets/data/data";

import "./Career.scss";

export default function Career() {
  return (
    <div className="career">
      <div className="career__container">
        <h2>Engineering</h2>
        <div className="career__list">
          {data.map((a, i) => (
            <Link to={`/career/${a.id}`} key={i}>
              {a.job}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
