import React from "react";
import { phone } from "../SmallComponents/Images";
import Seperator from "../SmallComponents/Seperator/seperator";
import "./callToEngagment.css";

export default function CallToEngagment() {
  return (
    <>
      <div className="calltoengagement">
        <div className="sm-container">
          <div className="sm-call-to-engagement">
            <div className="sm-call-to-engagement__headline-container">
              <h3 className="sm-title sm-title--h2">Can we help you?</h3>
            </div>
            <div className="sm-call-to-engagement__items">
              <div className="sm-call-to-engagement__item">
                <h3 className="sm-call-to-engagement__title">
                  Ask us your question
                </h3>
                <a
                  className="sm-button js-button sm-button--orange sm-button--image sm-button--outlined"
                  href="tel:0041844848444"
                >
                  <img
                    className="sm-button__image"
                    src={phone}
                    alt="Telefon_Icon"
                  />
                  <span className="sm-button__label">0844 848 444</span>
                </a>
                <span className="sm-call-to-engagement__subline">
                  The usual provider fees apply
                </span>
              </div>
              <div className="sm-call-to-engagement__item">
                <h3 className="sm-call-to-engagement__title">
                  Report your damage
                </h3>
                <a
                  className="sm-button js-button sm-button--orange sm-button--image sm-button--outlined"
                  href="tel:0041800848488"
                >
                  <img
                    className="sm-button__image"
                    src={phone}
                    alt="Telefon_Icon"
                  />
                  <span className="sm-button__label">0800 848 488</span>
                </a>
                <span className="sm-call-to-engagement__subline">
                  The usual provider fees apply
                </span>
              </div>
              <div className="sm-call-to-engagement__item">
                <h3 className="sm-call-to-engagement__title">Write Us</h3>
                <a
                  className="sm-button js-button sm-button--orange sm-button--image sm-button--outlined"
                  href="#"
                >
                  <span className="sm-button__label">News</span>
                </a>
                <span className="sm-call-to-engagement__subline">
                  Get in touch via the contact form or email
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Seperator />
    </>
  );
}
