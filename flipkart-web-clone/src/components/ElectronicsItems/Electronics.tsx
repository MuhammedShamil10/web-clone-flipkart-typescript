import React, { createElement, useRef } from "react";
import { Electronic } from "../../types";
import "./Electronics.css";
import bluePlain from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/blue-plain.webp";
import leftRight from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/left-right.svg";
import ProductCards from "../ProductCards/ProductCards";

interface Elprops {
  electronicValue: Electronic[];
}

export default function Electronics({ electronicValue }: Elprops) {
  const image = useRef(document.createElement("div"));
  const arrowRight = useRef(document.createElement("div"));
  const arrowLeft = useRef(document.createElement("div"));

  const handleClickLeft = () => {
    image.current.style.transform = `translateX(${2}%)`;
    arrowRight.current.style.display = "flex";
    arrowLeft.current.style.display = "none";
    image.current.style.transition = "transform ease-in-out 0.45s";
  };

  const handleClickRight = () => {
    image.current.style.transform = `translateX(${-130}%)`;
    arrowLeft.current.style.display = "flex";
    arrowRight.current.style.display = "none";
    image.current.style.transition = "transform ease-in-out 0.45s";
  };

  return (
    <div className="dsk-electronic-container">
      <div className="left-electronic-section">
        <div className="left-text">
          <h2>Best of Electronics</h2>
          <div className="button-view">
            <a href="">VIEW ALL</a>
          </div>
        </div>
      </div>
      <div className="center-items-container">
        <div className="center-items-section">
          <div className="prev-arrow" ref={arrowLeft} onClick={handleClickLeft}>
            <img src={leftRight} />
          </div>

          <div className="product-electronic" ref={image}>
            {electronicValue.map((item) => (
              <div className="product-electronic-section">
                <div className="image-el">
                  <img src={item.img} alt="product-image" />
                </div>
                <div className="product-name">{item.name}</div>
                <div className="product-offer">{item.offer}</div>
                <div className="product-brand">{item.brands}</div>
              </div>
            ))}
          </div>

          <div
            className="next-arrow"
            ref={arrowRight}
            onClick={handleClickRight}
          >
            <img src={leftRight} alt="Arrow" />
          </div>
        </div>
      </div>

      <div className="right-electronic-section">
        <div className="right-el-image">
          <img src={bluePlain} alt="TravelticketImage" />
        </div>
      </div>
    </div>
  );
}
