import React from "react";
import "./keyNumbers.css";
export default function KeyNumbers() {
  return (
    <>
      <div className="keynumbers">
        <div className="sm-key-numbers ">
          <div className="sm-key-numbers__inner">
            <div className="sm-key-numbers__item">
              <div className="sm-key-numbers__number">93%</div>
              <div className="sm-key-numbers__text">Recommendation rate</div>
            </div>
            <div className="sm-key-numbers__item">
              <div className="sm-key-numbers__number">180'000</div>
              <div className="sm-key-numbers__text">Customers</div>
            </div>
            <div className="sm-key-numbers__item">
              <div className="sm-key-numbers__number">4.3/5</div>
              <div className="sm-key-numbers__text">Google review</div>
            </div>
            <div className="sm-key-numbers__item">
              <div className="sm-key-numbers__number">1994</div>
              <div className="sm-key-numbers__text">Founding Year</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
