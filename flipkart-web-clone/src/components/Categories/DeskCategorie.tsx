import { NavItem } from "../../types";
import arrowImage from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/angle-down.png"
import './DeskCategorie.css'

interface DeskImgList {
    desktopValue: NavItem[] 
}


export default function DeskCategorie({desktopValue}: DeskImgList) {
  console.log(desktopValue);
  
    return (
    <nav>
        <div className="desktop-categories">
        <div className="caregories-center">
          {desktopValue.map((item) => (
          <div className="categories-list" key={item.name}>
            <a href="">
              <img src={item.image} alt="item-pictures" />
              <div className="item-name">
                <span>{item.name}</span>
                {item.downArrow == true ? <img src={arrowImage} /> : ""}
              </div>
            </a>
          </div> 
          ))}
        </div>
      </div>
    </nav>
  )
}
