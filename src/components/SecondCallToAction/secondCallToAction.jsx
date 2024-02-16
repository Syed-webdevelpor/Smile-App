import React from "react";
import { Metaverse } from "../SmallComponents/Images";
import "./secondCallToAction.css";

export default function SecondCallToAction() {
  return (
    <>
      <div className="calltoaction">
        <div className="sm-call-to-action sm-call-to-action--padding sm-call-to-action--product-head sm-call-to-action--grey ">
          <div className="sm-call-to-action__inner">
            <div className="sm-call-to-action__title-container">
              <h2 className="sm-title sm-title--h2">Smile goes Metaverse 🚀</h2>
            </div>
            <div className="sm-call-to-action__content">
              <div className="sm-call-to-action__text-container">
                <div className="sm-text sm-text--lead">
                  Immerse yourself in the smile.meta world. Virtual customer
                  consultations that can be booked daily in our Smile
                  consultation room. In the Experience Lounge you can experience
                  Smile's offers and services up close, virtually in 3D!
                </div>
              </div>
              <div className="sm-call-to-action__buttons">
                <div className="sm-call-to-action__button-container">
                  <a className="sm-button js-button sm-button--wide " href="#">
                    <span className="sm-button__label">More on this</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="sm-call-to-action__img-container">
              <div className="sm-call-to-action__ratio-wrapper">
                <img
                  className="sm-call-to-action__img lazyautosizes lazyloaded"
                  data-srcset={`${Metaverse} 1440w 1080h, ${Metaverse} 480w 360h, ${Metaverse} 960w 720h, ${Metaverse} 1920w 1440h, ${Metaverse} 2560w 1920h`}
                  data-src={Metaverse}
                  data-sizes="auto"
                  alt="smile.meta"
                  fetchpriority="high"
                  sizes="648px"
                  srcSet={`${Metaverse} 1440w 1080h, ${Metaverse} 480w 360h, ${Metaverse} 960w 720h, ${Metaverse} 1920w 1440h, ${Metaverse} 2560w 1920h`}
                  src={Metaverse}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
