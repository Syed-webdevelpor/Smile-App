import React from "react";
import "./firstSection.css";
import { StartImg } from "../SmallComponents/Images";

export default function FirstSection() {
  return (
    <div className="sm-call-to-action">
      <div className="sm-call-to-action__inner">
        <div className="sm-call-to-action__title-container">
          <h1 className="sm-title sm-title--h1">Insurance without Blabla</h1>
        </div>
        <div className="sm-call-to-action__content">
          <div className="sm-call-to-action__text-container">
            <div className="sm-text sm-text--lead">
              Fair premiums. Best service. 100% Online. Let's get started.
            </div>
          </div>
          <div className="sm-call-to-action__buttons">
            <div className="sm-call-to-action__button-container">
              <a className="sm-button js-button sm-button--wide" href="#">
                <span className="sm-button__label">Calculate Premium</span>
              </a>
            </div>
            <div className="sm-call-to-action__button-container">
              <a
                className="sm-button js-button sm-button--outlined sm-button--wide"
                href="#"
              >
                <span className="sm-button__label">Request Consultation</span>
              </a>
            </div>
          </div>
        </div>
        <div className="sm-call-to-action__img-container">
          <div className="sm-call-to-action__ratio-wrapper">
            <img
              className="sm-call-to-action__img lazyautosizes lazyloaded"
              data-srcset={StartImg + " 2560w 1920h"}
              data-src={StartImg}
              data-sizes="auto"
              alt="Home"
              fetchpriority="high"
              sizes="648px"
              srcSet={StartImg + " 2560w 1920h"}
              src={StartImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
