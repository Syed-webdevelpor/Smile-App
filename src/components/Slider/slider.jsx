import React, { useState } from "react";
import { home } from "../SmallComponents/Images";
import { productCar } from "../SmallComponents/Images";
import { productBike } from "../SmallComponents/Images";
import { productHealth } from "../SmallComponents/Images";
import { productLegal } from "../SmallComponents/Images";
import { productLife } from "../SmallComponents/Images";
import { productTravel } from "../SmallComponents/Images";
import { leftArrow } from "../SmallComponents/Images";
import { rightArrow } from "../SmallComponents/Images";
import "./slider.css";
import Seperator from "../SmallComponents/Seperator/seperator";

export default function Slider() {
  const [translateX, setTranslateX] = useState(0);
  const [sliderNumber, setSliderNumber] = useState(0);

  const moveForward = () => {
    if (translateX <= 0) {
      setTranslateX((prevTranslateX) => prevTranslateX - 340);
    }
    if (translateX === -680) {
      setSliderNumber(-1020);
    }
  };

  const moveBackward = () => {
    if (translateX > -1021) {
      setTranslateX((prevTranslateX) => prevTranslateX + 340);
    }
    if (translateX === -340) {
      setSliderNumber(0);
    }
  };

  return (
    <>
      <div className="sm-product-slider js-slider">
        <div className="sm-product-slider__header">
          <h2 className="sm-title sm-title--lead">
            We insure what is dear to you
          </h2>
          <button
            className={`sm-slider-button js-slider-prev sm-slider-button--prev ${
              sliderNumber === -1020 ? "is-visible" : ""
            }`}
            onClick={moveBackward}
          >
            <svg className="sm-slider-button__arrow" viewBox="0 0 44 16">
              <image xlinkHref={leftArrow} style={{ width: "25px" }} />
            </svg>
            <svg
              className="sm-slider-button__arrow sm-slider-button__arrow--large"
              viewBox="0 0 97 16"
            >
              <image xlinkHref={leftArrow} style={{ width: "25px" }} />
            </svg>
          </button>
          <button
            className={`sm-slider-button js-slider-next ${
              sliderNumber === 0 ? "is-visible" : ""
            }`}
            onClick={moveForward}
          >
            <svg className="sm-slider-button__arrow" viewBox="0 0 44 16">
              <image xlinkHref={rightArrow} style={{ width: "25px" }} />
            </svg>
            <svg
              className="sm-slider-button__arrow sm-slider-button__arrow--large"
              viewBox="0 0 97 16"
            >
              <image xlinkHref={rightArrow} style={{ width: "25px" }} />
            </svg>
          </button>
        </div>
        <div className="sm-product-slider__wrapper js-slider-wrapper">
          <div
            className="sm-product-slider__track js-slider-track"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            <div className="sm-product-slider__item js-slider-item">
              <a className="sm-product" href="#">
                <img
                  className="sm-product__logo"
                  src={productCar}
                  alt="Home-Auto-Icon"
                />

                <h3 className="sm-product__title">Car insurance</h3>
              </a>
            </div>
            <div class="sm-product-slider__item js-slider-item">
              <a class="sm-product" href="#">
                <img class="sm-product__logo" src={home} alt="Home-Haus-Icon" />

                <h3 class="sm-product__title">Household insurance</h3>
              </a>
            </div>
            <div className="sm-product-slider__item js-slider-item">
              <a className="sm-product" href="#">
                <img
                  className="sm-product__logo"
                  src={productBike}
                  alt="Home-Motorrad-Icon"
                />

                <h3 className="sm-product__title">Motorcycle insurance</h3>
              </a>
            </div>

            <div className="sm-product-slider__item js-slider-item">
              <a className="sm-product" href="">
                <img
                  className="sm-product__logo"
                  src={productTravel}
                  alt="Home-Koffer-Icon"
                />

                <h3 className="sm-product__title">Travel insurance</h3>
              </a>
            </div>

            <div className="sm-product-slider__item js-slider-item">
              <a className="sm-product" href="#">
                <img
                  className="sm-product__logo"
                  src={productLegal}
                  alt="Home-Waage-Icon"
                />

                <h3 className="sm-product__title">
                  Legal protection insurance
                </h3>
              </a>
            </div>

            <div className="sm-product-slider__item js-slider-item">
              <a className="sm-product" href="#">
                <img
                  className="sm-product__logo"
                  src={productLife}
                  alt="Home-Sonne-Icon"
                />

                <h3 className="sm-product__title">Funeral insurance</h3>
              </a>
            </div>

            <div className="sm-product-slider__item js-slider-item">
              <a className="sm-product" href="#">
                <img
                  className="sm-product__logo"
                  src={productHealth}
                  alt="Home-Herz-Icon"
                />
                <h3 className="sm-product__title">Health insurance</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Seperator />
    </>
  );
}
