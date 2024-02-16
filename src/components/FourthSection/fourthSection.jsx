import React from "react";
import { Home_usp } from "../SmallComponents/Images";
import { Home_USP3 } from "../SmallComponents/Images";
import { Landing_2 } from "../SmallComponents/Images";
import "./fourthSection.css";

function TextMediaCallToAction(props) {
  return (
    <div className="textmedia">
      <div
        className={`sm-call-to-action ${
          props.reversed && "sm-call-to-action--reversed"
        }`}
      >
        <div
          className={`sm-call-to-action__inner ${
            props.reversed && "sm-call-to-action__inner--reversed"
          }`}
        >
          <div
            className={`sm-call-to-action__title-container ${
              props.reversed && "sm-call-to-action__title-container--reversed"
            }`}
          >
            <h2 className="sm-title sm-title--h1">{props.title}</h2>
          </div>
          <div
            className={`sm-call-to-action__content  ${
              props.reversed && "sm-call-to-action__content--reversed"
            }`}
          >
            <div className="sm-call-to-action__text-container">
              <div className="sm-text">
                <p>{props.text}</p>
              </div>
            </div>
          </div>
          <div
            className={`sm-call-to-action__img-container  ${
              props.reversed && "sm-call-to-action__img-container--reversed"
            }`}
          >
            <div className="sm-call-to-action__ratio-wrapper">
              <img
                className="sm-call-to-action__img lazyautosizes lazyloaded"
                data-srcset={props.imgSrcSet}
                data-src={props.imgSrc}
                data-sizes="auto"
                alt={props.alt}
                sizes="648px"
                srcSet={props.imgSrcSet}
                src={props.imgSrc}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FourthSection() {
  return (
    <>
      <TextMediaCallToAction
        title="Bester Service"
        text="Smile makes you happy. Whether by phone, email or chat: our
                    team is there for you whenever you need us. Fast, easy and
                    reliable."
        imgSrcSet={Home_usp + "2560w 1920h"}
        imgSrc={Home_usp}
        alt="Home-BesterService"
      />
      <TextMediaCallToAction
        title="Fair premiums"
        text="Insurance doesn't have to be expensive. So that we can offer you the best price-performance ratio, we avoid unnecessary paperwork and the costly detour through representatives."
        imgSrcSet={`${Home_USP3} 1440w 1080h, ${Home_USP3} 480w 360h, ${Home_USP3} 960w 720h, ${Home_USP3} 1920w 1440h, ${Home_USP3} 2560w 1920h`}
        imgSrc={Home_USP3}
        alt="Home-FairPremiums"
        reversed
      />
      <TextMediaCallToAction
        title="100% Online"
        text="When? At any time! Where? Everywhere! Because opening hours are the day before yesterday and it's more convenient to do everything quickly online anyway. How? With all your insurance in a single Smile app."
        imgSrcSet={Landing_2 + "2560w 1920h"}
        imgSrc={Landing_2}
        alt="Home-100%Online"
      />
    </>
  );
}
