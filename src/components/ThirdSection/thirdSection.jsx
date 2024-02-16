import React from "react";
import { Smile_Comparis_2023 } from "../SmallComponents/Images";
import { Smile_Bonus_2023 } from "../SmallComponents/Images";
import { Smile_Bonus_Bestnote_2023 } from "../SmallComponents/Images";
import { Smile_Versi_Bonus_Auto_2023 } from "../SmallComponents/Images";
import "./thirdSection.css";
import Seperator from "../SmallComponents/Seperator/seperator";

export default function ThirdSection() {
  return (
    <>
      <div className="awards">
        <div className="sm-awards sm-awards--multiple js-simple-slider">
          <div className="sm-awards__inner">
            <div className="sm-awards__header">
              <div className="sm-awards__title-container">
                <h2 className="sm-title sm-title--h3">Smile makes you happy</h2>
              </div>
              <div className="sm-awards__text-container">
                <div className="sm-text">
                  <p>
                    We don't say this ourselves, but rather our customers and
                    experts, who present us with top grades and prestigious
                    awards every year.&nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="sm-awards__imgs js-simple-slider-wrapper">
              <div className="sm-awards__img-container">
                <img
                  className="sm-awards__img lazyautosizes ls-is-cached lazyloaded"
                  alt="Comparis Note Car 2023"
                  data-sizes="auto"
                  data-src={Smile_Comparis_2023}
                  sizes="187px"
                  src={Smile_Comparis_2023}
                />
              </div>
              <div className="sm-awards__img-container">
                <img
                  className="sm-awards__img lazyautosizes ls-is-cached lazyloaded"
                  alt="Comparis Note Home 2023"
                  data-sizes="auto"
                  data-src={Smile_Bonus_2023}
                  sizes="187px"
                  src={Smile_Bonus_2023}
                />
              </div>
              <div className="sm-awards__img-container">
                <img
                  className="sm-awards__img lazyautosizes ls-is-cached lazyloaded"
                  alt="Bonus Note Car 2023"
                  data-sizes="auto"
                  data-src={Smile_Versi_Bonus_Auto_2023}
                  sizes="200px"
                  src={Smile_Versi_Bonus_Auto_2023}
                />
              </div>
              <div className="sm-awards__img-container">
                <img
                  className="sm-awards__img lazyautosizes ls-is-cached lazyloaded"
                  alt="Bonus Note Home 2023"
                  data-sizes="auto"
                  data-src={Smile_Bonus_Bestnote_2023}
                  sizes="200px"
                  src={Smile_Bonus_Bestnote_2023}
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
