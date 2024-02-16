import React from "react";
import { overall_page_richtig } from "../SmallComponents/Images";
import "./callToAction.css";
import Seperator from "../SmallComponents/Seperator/seperator";

export default function CallToAction() {
  return (
    <>
      <div className="calltoaction">
        <div className="sm-call-to-action sm-call-to-action--padding sm-call-to-action--product-head sm-call-to-action--grey ">
          <div className="sm-call-to-action__inner">
            <div className="sm-call-to-action__title-container">
              <h2 className="sm-title sm-title--h2">
                smile.green Engagements 💚
              </h2>
            </div>
            <div className="sm-call-to-action__content">
              <div className="sm-call-to-action__text-container">
                <div className="sm-text sm-text--lead">
                  <p>
                    The topic of sustainability is often like an impenetrable
                    jungle where it is difficult to stay oriented. And you can
                    find a lot of blah blah. Not so with smile.green
                    engagements: With our six engagements you can easily do good
                    in everyday life. The three pillars for this are technology,
                    community and lifestyle. This is how we anchor
                    sustainability in our digital business model.
                  </p>
                </div>
              </div>
              <div className="sm-call-to-action__buttons">
                <div className="sm-call-to-action__button-container">
                  <a
                    className="sm-button js-button sm-button--wide sm-button--green"
                    href="#"
                  >
                    <span className="sm-button__label">More on this</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="sm-call-to-action__img-container">
              <div className="sm-call-to-action__ratio-wrapper">
                <img
                  className="sm-call-to-action__img lazyautosizes lazyloaded"
                  data-srcset={`${overall_page_richtig} 1440w 1080h, ${overall_page_richtig} 480w 360h, ${overall_page_richtig} 960w 720h, ${overall_page_richtig} 1920w 1440h, ${overall_page_richtig} 2560w 1920h`}
                  data-src={overall_page_richtig}
                  data-sizes="auto"
                  alt="smile.green"
                  fetchpriority="high"
                  sizes="648px"
                  srcSet={`${overall_page_richtig} 1440w 1080h, ${overall_page_richtig} 480w 360h, ${overall_page_richtig} 960w 720h, ${overall_page_richtig} 1920w 1440h, ${overall_page_richtig} 2560w 1920h`}
                  src={overall_page_richtig}
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
