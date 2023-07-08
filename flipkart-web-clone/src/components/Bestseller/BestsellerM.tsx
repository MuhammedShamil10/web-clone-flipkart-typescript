import backgroundImg from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/Sale_Campaign_2_09CAFE.webp";
import { Bestseller } from "../../types";
import "./Bestseller.css";

interface sellersProps {
  sellerValue: Bestseller[];
}

export default function BestsellerM({ sellerValue }: sellersProps) {
  return (
    <div className="bestseller-container">
      <div className="bestseller-heading">
        <span>bestseller</span>
        <img src={backgroundImg} alt="backroung-image" />
      </div>

      <div className="bestseller-product-list">
        <div className="bestseller-list">
          {sellerValue.map((item) => (
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
  );
}
