import React from "react";
import { scheduleDamage } from "../SmallComponents/Images";
import Seperator from "../SmallComponents/Seperator/seperator";

export default function SecondSection() {
  return (
    <>
      <div className="calltoaction">
        <div className="sm-call-to-action">
          <div className="sm-call-to-action__inner">
            <div className="sm-call-to-action__title-container">
              <h2 className="sm-title sm-title--h2">Damage report</h2>
            </div>
            <div className="sm-call-to-action__content">
              <div className="sm-call-to-action__text-container">
                <div className="sm-text sm-text--lead">
                  We're here for you! Report a new claim to us quickly and
                  easily using the online form or telephone.
                </div>
              </div>
              <div className="sm-call-to-action__buttons">
                <div className="sm-call-to-action__button-container">
                  <a className="sm-button js-button sm-button--wide" href="#">
                    <span className="sm-button__label">To report damage</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="sm-call-to-action__img-container">
              <div className="sm-call-to-action__ratio-wrapper">
                <img
                  className="sm-call-to-action__img lazyautosizes lazyloaded"
                  data-srcset={scheduleDamage + "2560w 1920h"}
                  data-src={scheduleDamage}
                  data-sizes="auto"
                  alt="schadenmelden"
                  fetchpriority="high"
                  sizes="648px"
                  srcset={scheduleDamage + "2560w 1920h"}
                  src={scheduleDamage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Seperator />
    </>
  );
}
