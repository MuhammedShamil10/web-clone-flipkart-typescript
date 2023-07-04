import backgroundImg from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/campus-item.webp";
import rightbtn from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/right-btn.webp"
import { CampusItem } from "../../types";
import './CampusItems.css'

 interface campusProps {
  campusValue: CampusItem[]
}

export default function CampusItems({ campusValue }: campusProps) {
  return (
    <>
    <div className="campus-item-container">
      <div className="campus-item-section">
        <div className="container-image-text">
          <div className="background-image-section">
            <img src={backgroundImg} alt="backroung-image" />
          </div>
          <div className="text-heading">
            <div className="container-campus-name">
              <span>End of Season campus</span>
            </div>
            <img src={rightbtn} alt="buttonImage" />
          </div>
        </div>
        </div>
    </div>


        <div className="campus-product-list">
          <div className="campus-list">
            {campusValue.map((item) => (
              <div className="list-details">
                <div className="list-content">
                  <div className="image-campus-section">
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
        </>
  );
}
