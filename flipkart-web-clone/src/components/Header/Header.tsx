import "./Header.css";
import menuBarIcon from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/svgexport-1.svg";
import flikartLogo from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/fk-explorePlus-c5de64.png";
import appInstall from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/svgexport-2.svg";
import cartIcon from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/svgexport-3.svg";
import searchIcon from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/search-icon.webp"
export default function Header() {
  return (
    <div>
      <header>
        <div className="top-header-section">
          <div className="nav-left">
            <a className="image-section" href="">
              <img src={menuBarIcon} alt="ham-burger-picture" />
            </a>
            <a href="" className="flipkart-name">
              <img src={flikartLogo} alt="ham-burger-picture" width="85px" />
            </a>
          </div>
          <div className="nav-right">
            <a className="image-section" href="">
              <img src={appInstall} alt="ham-burger-picture" width="" />
            </a>
            <a className="image-section" href="">
              <img src={cartIcon} alt="ham-burger-picture" width="" />
            </a>
            <a className="image-section-last" href="">
              <span>Login</span>
            </a>
          </div>
        </div>

        <div className="header-center">
            <div className="header-input-section">
                <div className="input-image">
                    <img src={searchIcon} alt="input-image"/>
                </div>
                <div className="input-text">
                    Search for Products, Brands and More
                </div>
            </div>
        </div>
      </header>
    </div>
  );
}
