import { GrabOrGone } from "../../types";
import backgroundImg from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/Sale_Campaign_2_09CAFE.webp";
import "./GraborGone.css";

interface grabOrGoneProps {
  grabOrGoneValue: GrabOrGone[];
}

export default function GraborGone({ grabOrGoneValue }: grabOrGoneProps) {
  return (
    <>
      <div className="bestseller-container">
        <div className="bestseller-heading">
          <span>grabOrGone</span>
          <img src={backgroundImg} alt="backroung-image" />
        </div>

        <div className="bestseller-product-list">
          <div className="bestseller-list">
            {grabOrGoneValue.map((item) => (
              <div className="list-details">
                <div className="list-content">
                  <div className="image-bestseller-section">
                    <img src={item.img} alt="Image" />
                  </div>
                  <div className="product-name-offers">
                    <div className="product-name">{item.name}</div>
                    <div className="product-offer">{item.priceOffer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="placer-order-section">
        <span className="order-section">
          Flipkart - Your go-to place for Online Shopping
        </span>
        <span className="plus">+</span>
      </div>
    </>
  );
}
