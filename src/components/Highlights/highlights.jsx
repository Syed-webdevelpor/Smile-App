import React from "react";
import { BriefIcon } from "../SmallComponents/Images";
import { ComputerIcon } from "../SmallComponents/Images";
import { RechnerIcon } from "../SmallComponents/Images";
import { downArrow } from "../SmallComponents/Images";
import "./highlights.css";
import Seperator from "../SmallComponents/Seperator/seperator";
export default function Highlights() {
  return (
    <>
      <div className="highlights">
        <div className="sm-container">
          <div className="sm-highlights js-highlights sm-highlights--three-columns">
            <div className="sm-highlights__headline">
              <h2 className="sm-title sm-title--h1">It's that easy</h2>
            </div>
            <div className="sm-highlights__value-container">
              <div className="sm-highlights__value">
                <img
                  className="sm-highlights__icon"
                  src={BriefIcon}
                  alt="Prämie berechnen"
                />
                <div className="sm-highlights__text">
                  <div className="sm-text">
                    <div>
                      <p>
                        Calculate premium Calculate your premium online now and
                        you will receive an offer straight away.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm-highlights__value">
                <img
                  className="sm-highlights__icon"
                  src={ComputerIcon}
                  alt="Offerte bestätigen"
                />
                <div className="sm-highlights__text">
                  <div className="sm-text">
                    <div>
                      <p>
                        Confirm offer You can confirm the offer with one click
                        of the mouse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm-highlights__value">
                <img
                  className="sm-highlights__icon"
                  src={RechnerIcon}
                  alt="Versicherungspolice"
                />
                <div className="sm-highlights__text">
                  <div className="sm-text">
                    <div>
                      <p>
                        Insurance policy We will then send you your insurance
                        policy.&nbsp;
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm-highlights__button-container">
              <div className="sm-highlights__button">
                <label className="sm-select js-select sm-select--bold sm-select--inline">
                  <div className="sm-select__inner">
                    <select className="sm-select__field js-field" name="Select">
                      <option selected="" value="" disabled="">
                        Choose insurance
                      </option>
                      <option value="" data-target="_blank">
                        smile.car
                      </option>
                      <option value="" data-target="_blank">
                        smile.bike
                      </option>
                      <option value="" data-target="_blank">
                        smile.home
                      </option>
                      <option value="" data-target="_blank">
                        smile.travel
                      </option>
                      <option value="" data-target="_blank">
                        smile.legal
                      </option>
                      <option value="" data-target="_blank">
                        smile.life
                      </option>
                      <option value="" data-target="_blank">
                        smile.health
                      </option>
                    </select>
                    <svg className="sm-select__arrow" viewBox="0 0 24 24">
                      <image xlinkHref={downArrow} style={{ width: "25px" }} />
                    </svg>
                  </div>
                </label>
              </div>
              <div className="sm-highlights__button">
                <a className="sm-button js-button is-disabled">
                  <span className="sm-button__label">Calculate premium</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Seperator />
    </>
  );
}
