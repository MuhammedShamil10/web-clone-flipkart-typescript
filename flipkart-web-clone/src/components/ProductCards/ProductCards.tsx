import { ProductCard, CampusDeal } from "../../types";
import leftRight from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/left-right.svg";
import "./ProductCards.css";
import { useRef } from "react";

interface productCards {
  productValue: ProductCard[];
}

export default function ProductCards({ productValue }: productCards) {
  const image = useRef(document.createElement("div"));
  const arrowRight = useRef(document.createElement("div"));
  const arrowLeft = useRef(document.createElement("div"));

  const handleClickLeft = () => {
    image.current.style.transform = `translateX(${2}%)`;
    arrowRight.current.style.display = "flex";
    arrowLeft.current.style.display = "none";
    image.current.style.transition = "transform ease-in-out 0.45s";
  }

  const handleClickRight = () => {
    image.current.style.transform = `translateX(${-130}%)`;
    arrowLeft.current.style.display = "flex";
    arrowRight.current.style.display = "none";
    image.current.style.transition = "transform ease-in-out 0.45s";
  }


  return (
    <>
    <div className="product-all-container">
      <div className="prev-arrows" ref={arrowLeft} onClick={handleClickLeft}>
        <img src={leftRight} />
      </div>
      <div className="products-all-section" ref={image}>
      {productValue.map((item) => (
        <div className="products-items">
          <div className="img">
            <img src={item.image} />
          </div>
          <div className="product-name">{item.ProductNames}</div>
          <div className="product-offer">{item.text}</div>
          <div className="product-brand">{item.brand}</div>
        </div>
      ))}
      </div>
      <div className="next-arrows" ref={arrowRight} onClick={handleClickRight}>
        <img src={leftRight} alt="Arrow" />
      </div>
      </div>
    </>
  );
}
